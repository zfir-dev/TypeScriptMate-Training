#!/usr/bin/env bash
set -euo pipefail

# Configuration
INPUT_DIR="outputs/bigcode-ts-output-4000"
OUTPUT_DIR="outputs/bigcode-ts-output-4000-formatted"
TMP_REPORT="outputs/bigcode-ts-output-4000-prettier-passed.txt"

# Clean output
rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"
> "$TMP_REPORT"

# Ensure Prettier is available
if ! npx prettier --version > /dev/null 2>&1; then
  echo "Prettier is not installed. Run: npm install --save-dev prettier"
  exit 1
fi

# Process all .ts files
find "$INPUT_DIR" -type f -name "*.ts" | while read -r file; do
  if npx prettier --check "$file" > /dev/null 2>&1; then
    echo "$file passed"
    echo "$file" >> "$TMP_REPORT"
  else
    echo "$file not passed"
  fi
done

# Copy passing files to output folder, preserving structure
while read -r file; do
  rel_path="${file#$INPUT_DIR/}"
  dest_path="$OUTPUT_DIR/$rel_path"
  mkdir -p "$(dirname "$dest_path")"
  cp "$file" "$dest_path"
done < "$TMP_REPORT"

echo -e "\nCopied formatted files to: $OUTPUT_DIR"
rm "$TMP_REPORT"
