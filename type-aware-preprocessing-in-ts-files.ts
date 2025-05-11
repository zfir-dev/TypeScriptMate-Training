// ─── Install dependencies ─────────────────────────────────────────────────────
// npm init -y
// npm install ts-morph csv-writer typescript

import { Project, ts } from "ts-morph";
import * as path from "path";
import * as fs from "fs";
import { createObjectCsvWriter } from "csv-writer";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const SOURCE_DIR = "outputs/bigcode-ts-output-4000";
const OUTPUT_FILE = "outputs/ts-output-4000-types.csv";
const BATCH_SIZE = 1000;

// ─── Ensure Output Directory Exists ──────────────────────────────────────────
fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });

// ─── Get All TS Files ────────────────────────────────────────────────────────
function getAllTSFiles(dir: string): string[] {
    const results: string[] = [];
    for (const file of fs.readdirSync(dir)) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            results.push(...getAllTSFiles(fullPath));
        } else if (file.endsWith(".ts")) {
            results.push(fullPath);
        }
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

// ─── Main Processing ─────────────────────────────────────────────────────────
async function processInBatches() {
    const allFiles = getAllTSFiles(SOURCE_DIR);
    console.log(`📦 Found ${allFiles.length} TypeScript files in ${SOURCE_DIR}`);

    if (allFiles.length === 0) {
        console.error("❌ No .ts files found. Check your SOURCE_DIR.");
        process.exit(1);
    }

    console.log("🔍 First 5 files:", allFiles.slice(0, 5));

    for (let i = 0; i < allFiles.length; i += BATCH_SIZE) {
        const batch = allFiles.slice(i, i + BATCH_SIZE);
        console.log(`🔄 Processing batch ${Math.floor(i / BATCH_SIZE) + 1} (${batch.length} files)...`);

        const project = new Project({
            useInMemoryFileSystem: false,
            skipAddingFilesFromTsConfig: true,
        });

        project.addSourceFilesAtPaths(batch);

        const rows = [];

        for (const sourceFile of project.getSourceFiles()) {
            const filePath = sourceFile.getFilePath();

            const interfaces = sourceFile.getInterfaces().map(i => i.getName());
            const types = sourceFile.getTypeAliases().map(t => t.getName());
            const enums = sourceFile.getEnums().map(e => e.getName());
            const classes = sourceFile.getClasses().map(c => c.getName()).filter(Boolean);

            const decorators = sourceFile.getDescendantsOfKind(ts.SyntaxKind.Decorator)
                .map(d => {
                    try {
                        return d.getExpression().getText();
                    } catch {
                        return "<invalid>";
                    }
                });

            const imports = sourceFile.getImportDeclarations()
                .map(imp => {
                    try {
                        return imp.getModuleSpecifier().getLiteralText();
                    } catch {
                        return "<invalid>";
                    }
                });

            const exports = sourceFile.getExportDeclarations()
                .map(exp => {
                    try {
                        const spec = exp.getModuleSpecifier();
                        return spec ? spec.getLiteralText() : "export {...}";
                    } catch {
                        return "export {...}";
                    }
                });

            const predefinedTypes = sourceFile
                .getDescendantsOfKind(ts.SyntaxKind.TypeReference)
                .map(ref => ref.getText())
                .filter(text =>
                    [
                        "string", "number", "boolean", "any", "void", "null", "undefined",
                        "unknown", "never", "object", "Function", "Array", "Date", "RegExp",
                        "Error", "Promise", "Map", "Set", "WeakMap", "WeakSet", "Symbol",
                        "BigInt", "Buffer", "Uint8Array", "Int8Array", "Uint16Array", "Int16Array",
                        "Uint32Array", "Int32Array", "Float32Array", "Float64Array", "DataView"
                    ].includes(text)
                );

            rows.push({
                file: filePath,
                interfaces: interfaces.join(";"),
                types: types.join(";"),
                enums: enums.join(";"),
                classes: classes.join(";"),
                decorators: decorators.join(";"),
                imports: imports.join(";"),
                exports: exports.join(";"),
                usedTypes: Array.from(new Set(predefinedTypes)).join(";")
            });
        }

        await csvWriter.writeRecords(rows);
    }

    console.log("✅ All batches processed and written to:", OUTPUT_FILE);
}

processInBatches();

// ─── Run the script ───────────────────────────────────────────────────────────
// npx tsc type-aware-preprocessing-in-ts-files.ts
// node --max-old-space-size=8192 type-aware-preprocessing-in-ts-files.js
