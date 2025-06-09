// ─── Install dependencies ─────────────────────────────────────────────────────
// npm init -y
// npm install ts-morph csv-writer typescript @types/node

import { Project, ts } from "ts-morph";
import * as path from "path";
import * as fs from "fs";
import { createObjectCsvWriter } from "csv-writer";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const SOURCE_DIR = "outputs/github-ts-output-formatted";
const OUTPUT_FILE = "outputs/github-ts-output-types.csv";
const BATCH_SIZE = 1000; // Reduced batch size to prevent memory issues

// ─── Ensure Output Directory Exists ──────────────────────────────────────────
fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });

// ─── Get All TS Files ────────────────────────────────────────────────────────
function getAllTSFiles(dir: string): string[] {
    const results: string[] = [];
    try {
        for (const file of fs.readdirSync(dir)) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                results.push(...getAllTSFiles(fullPath));
            } else if (file.endsWith(".ts")) {
                results.push(fullPath);
            }
        }
    } catch (error) {
        console.error(`Error reading directory ${dir}:`, error);
    }
    return results;
}

// ─── CSV Writer Setup ────────────────────────────────────────────────────────
const csvWriter = createObjectCsvWriter({
    path: OUTPUT_FILE,
    header: [
        { id: "file", title: "File" },
        { id: "interfaces", title: "Interfaces" },
        { id: "types", title: "TypeAliases" },
        { id: "enums", title: "Enums" },
        { id: "classes", title: "Classes" },
        { id: "decorators", title: "Decorators" },
        { id: "imports", title: "Imports" },
        { id: "exports", title: "Exports" },
        { id: "usedTypes", title: "PredefinedTypesUsed" }
    ]
});

// ─── Process Single File ─────────────────────────────────────────────────────
function processFile(sourceFile: any): any {
    try {
        const fileName = sourceFile.getBaseName();

        const interfaces = sourceFile.getInterfaces().map((i: any) => i.getName());
        const types = sourceFile.getTypeAliases().map((t: any) => t.getName());
        const enums = sourceFile.getEnums().map((e: any) => e.getName());
        const classes = sourceFile.getClasses().map((c: any) => c.getName()).filter(Boolean);

        const decorators = sourceFile.getDescendantsOfKind(ts.SyntaxKind.Decorator)
            .map((d: any) => {
                try {
                    return d.getExpression().getText();
                } catch {
                    return "<invalid>";
                }
            });

        const imports = sourceFile.getImportDeclarations()
            .map((imp: any) => {
                try {
                    return imp.getModuleSpecifier().getLiteralText();
                } catch {
                    return "<invalid>";
                }
            });

        const exports = sourceFile.getExportDeclarations()
            .map((exp: any) => {
                try {
                    const spec = exp.getModuleSpecifier();
                    return spec ? spec.getLiteralText() : "export {...}";
                } catch {
                    return "export {...}";
                }
            });

        const predefinedTypes = sourceFile
            .getDescendantsOfKind(ts.SyntaxKind.TypeReference)
            .map((ref: any) => ref.getText())
            .filter((text: string) =>
                [
                    "string", "number", "boolean", "any", "void", "null", "undefined",
                    "unknown", "never", "object", "Function", "Array", "Date", "RegExp",
                    "Error", "Promise", "Map", "Set", "WeakMap", "WeakSet", "Symbol",
                    "BigInt", "Buffer", "Uint8Array", "Int8Array", "Uint16Array", "Int16Array",
                    "Uint32Array", "Int32Array", "Float32Array", "Float64Array", "DataView"
                ].includes(text)
            );

        return {
            file: fileName,
            interfaces: interfaces.join(";"),
            types: types.join(";"),
            enums: enums.join(";"),
            classes: classes.join(";"),
            decorators: decorators.join(";"),
            imports: imports.join(";"),
            exports: exports.join(";"),
            usedTypes: Array.from(new Set(predefinedTypes)).join(";")
        };
    } catch (error) {
        console.error(`Error processing file ${sourceFile.getBaseName()}:`, error);
        return null;
    }
}

// ─── Main Processing ─────────────────────────────────────────────────────────
async function processInBatches() {
    const allFiles = getAllTSFiles(SOURCE_DIR);
    console.log(`Found ${allFiles.length} TypeScript files in ${SOURCE_DIR}`);

    if (allFiles.length === 0) {
        console.error("No .ts files found.");
        process.exit(1);
    }

    console.log("First 5 files:", allFiles.slice(0, 5));

    for (let i = 0; i < allFiles.length; i += BATCH_SIZE) {
        const batch = allFiles.slice(i, i + BATCH_SIZE);
        console.log(`Processing batch ${Math.floor(i / BATCH_SIZE) + 1} (${batch.length} files)...`);

        const project = new Project({
            useInMemoryFileSystem: false,
            skipAddingFilesFromTsConfig: true,
        });

        try {
            project.addSourceFilesAtPaths(batch);

            const rows: any[] = [];

            for (const sourceFile of project.getSourceFiles()) {
                const result = processFile(sourceFile);
                if (result) {
                    rows.push(result);
                }
            }

            if (rows.length > 0) {
                await csvWriter.writeRecords(rows);
            }

            // Clean up project to free memory
            for (const sourceFile of project.getSourceFiles()) {
                project.removeSourceFile(sourceFile);
            }
        } catch (error) {
            console.error(`Error processing batch ${Math.floor(i / BATCH_SIZE) + 1}:`, error);
        }
    }

    console.log("All batches processed and written to:", OUTPUT_FILE);
}

// ─── Run the script ───────────────────────────────────────────────────────────
processInBatches().catch(error => {
    console.error("Fatal error:", error);
    process.exit(1);
});
