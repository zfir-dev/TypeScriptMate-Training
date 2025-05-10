#!/usr/bin/env bash
set -euo pipefail

# Number of repositories to fetch (default: 50)
REPO_COUNT="${1:-50}"
OUTPUT_FILE="outputs/github-top-ts-repos.txt"

# Ensure GITHUB_TOKEN is set
if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "Error: Please set the GITHUB_TOKEN environment variable."
  exit 1
fi

echo "Fetching top ${REPO_COUNT} TypeScript repositories..."
curl -s \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  "https://api.github.com/search/repositories?q=language:TypeScript&sort=stars&order=desc&per_page=${REPO_COUNT}" \
| jq -r '.items[].full_name' > "${OUTPUT_FILE}"

echo "Saved repository list to ${OUTPUT_FILE}."

# clone_and_collect.sh
set -euo pipefail

# File containing repository list
REPO_LIST_FILE="outputs/github-top-ts-repos.txt"
# Directory to clone repos into
WORKDIR="outputs/github-ts-output-repos-clones"
# Directory to collect all .ts/.tsx files
DEST_DIR="outputs/github-ts-output"

mkdir -p "${WORKDIR}"
mkdir -p "${DEST_DIR}"

echo "Cloning and sparse-checking each repository..."
while read -r REPO; do
  NAME=$(basename "${REPO}")
  CLONE_PATH="${WORKDIR}/${NAME}"
  echo "→ Cloning ${REPO} into ${CLONE_PATH}..."

  # Clone without blobs
  git clone --filter=blob:none --no-checkout "https://github.com/${REPO}.git" "${CLONE_PATH}"
  pushd "${CLONE_PATH}" > /dev/null

    # Initialize sparse-checkout in **no-cone** mode to allow file globs
    git sparse-checkout init --no-cone

    # Specify patterns for .ts and .tsx files
    git sparse-checkout set "*.ts" "*.tsx"

    # Checkout default branch (main or master)
    if git rev-parse --verify origin/main >/dev/null 2>&1; then
      git checkout main
    else
      git checkout master
    fi

  popd > /dev/null
done < "${REPO_LIST_FILE}"

# Flatten and collect all TypeScript files

echo "Collecting all .ts and .tsx files into ${DEST_DIR}..."
find "${WORKDIR}" -type f \( -name '*.ts' -o -name '*.tsx' \) | while read -r FILE; do
  REL_PATH="${FILE#${WORKDIR}/}"
  DEST_NAME="${REL_PATH//\//_}"
  cp "${FILE}" "${DEST_DIR}/${DEST_NAME}"
done

echo "Done! All TypeScript files are in ${DEST_DIR}."
