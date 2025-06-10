#!/usr/bin/env bash
set -euo pipefail

# Configuration
INPUT_DIR="outputs/github-ts-output"
OUTPUT_DIR="outputs/github-ts-output-formatted"

# Clean & prepare output
rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"

# Ensure Prettier is installed
if ! npx prettier --version > /dev/null 2>&1; then
  echo "Prettier is not installed. Run: npm install --save-dev prettier"
  exit 1
fi

# Find all .ts files and format+copy them
find "$INPUT_DIR" -type f -name '*.ts' -print0 \
| while IFS= read -r -d '' file; do
  # Compute relative path & destination
  rel="${file#"$INPUT_DIR"/}"
  dest="$OUTPUT_DIR/$rel"

  # Mirror directory structure
  mkdir -p "$(dirname "$dest")"

  # Run Prettier and write to dest
  if npx prettier --parser typescript "$file" > "$dest"; then
    echo "[OK]   $rel"
  else
    echo "[ERR]  $rel (formatting failed)"
  fi
done

echo -e "\nAll files formatted under: $OUTPUT_DIR"
