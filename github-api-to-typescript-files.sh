# fetch_top_ts_repos.sh
#!/usr/bin/env bash
set -euo pipefail

# Usage: ./fetch_top_ts_repos.sh [REPO_COUNT]
# Example: ./fetch_top_ts_repos.sh 1000

# Number of repositories to fetch (default: 1000)
REPO_COUNT="${1:-1000}"
PER_PAGE=100
OUTPUT_FILE="outputs/github-top-ts-repos.txt"

# Calculate the number of pages needed (GitHub max 100 per page)
TOTAL_PAGES=$(( (REPO_COUNT + PER_PAGE - 1) / PER_PAGE ))

echo "Requested to fetch top ${REPO_COUNT} repositories (will fetch up to ${TOTAL_PAGES} pages)."

# Ensure GITHUB_TOKEN is set
if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "Error: Please set the GITHUB_TOKEN environment variable."
  exit 1
fi

# Initialize/clear output file
: > "${OUTPUT_FILE}"

# Fetch pages
for PAGE in $(seq 1 ${TOTAL_PAGES}); do
  echo "→ Page ${PAGE}/${TOTAL_PAGES}"
  curl -s \
    -H "Accept: application/vnd.github.v3+json" \
    -H "Authorization: token ${GITHUB_TOKEN}" \
    "https://api.github.com/search/repositories?q=language:TypeScript&sort=stars&order=desc&per_page=${PER_PAGE}&page=${PAGE}" \
  | jq -r '.items[].full_name' >> "${OUTPUT_FILE}"

  LINES=$(wc -l < "${OUTPUT_FILE}")
  echo "   Collected ${LINES} so far"

  # Stop when we've reached the desired count
  if [[ "${LINES}" -ge "${REPO_COUNT}" ]]; then
    echo "Reached target of ${REPO_COUNT} repositories."
    break
  fi

  # Respect rate limit
  sleep 1
done

# Trim to exact count (in case last page overshot)
head -n "${REPO_COUNT}" "${OUTPUT_FILE}" > tmp && mv tmp "${OUTPUT_FILE}"
echo "Saved exactly ${REPO_COUNT} repositories to ${OUTPUT_FILE}."

# clone_and_collect.sh
#!/usr/bin/env bash
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

  if [[ -d "${CLONE_PATH}" && -n "$(ls -A "${CLONE_PATH}" 2>/dev/null)" ]]; then
    echo "→ Skipping ${REPO}, directory already exists and is not empty."
    continue
  fi

  echo "→ Cloning ${REPO} into ${CLONE_PATH}..."

  # Clone without blobs
  git clone --filter=blob:none --no-checkout "https://github.com/${REPO}.git" "${CLONE_PATH}"
  pushd "${CLONE_PATH}" > /dev/null

    # Determine default branch from remote HEAD
    git remote set-head origin --auto
    DEFAULT_BRANCH=$(git symbolic-ref refs/remotes/origin/HEAD | sed 's@^refs/remotes/origin/@@')
    echo "Default branch is ${DEFAULT_BRANCH}"

    # Initialize sparse-checkout in no-cone mode to allow file globs
    git sparse-checkout init --no-cone

    # Specify patterns for .ts and .tsx files
    git sparse-checkout set "*.ts" "*.tsx"

    # Checkout default branch
    git checkout "${DEFAULT_BRANCH}"

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