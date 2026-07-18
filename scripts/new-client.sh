#!/usr/bin/env bash
# Usage: ./scripts/new-client.sh client-name
# Run this from inside lovan-foundry/. Creates ../lovan-clients/<client-name>
# with the foundry + client-template merged, ready to git init and open in
# Claude Code.
#
# If you're using GitHub's "Use this template" button instead, you don't need
# this script at all — it does the same thing, just remotely.

set -euo pipefail

CLIENT_NAME="${1:-}"
if [ -z "$CLIENT_NAME" ]; then
  echo "Usage: ./scripts/new-client.sh <client-name>"
  exit 1
fi

DEST="../lovan-clients/${CLIENT_NAME}"

if [ -d "$DEST" ]; then
  echo "Error: $DEST already exists."
  exit 1
fi

mkdir -p "$DEST"
cp -r client-template/. "$DEST/"
mkdir -p "$DEST/foundry"
cp -r foundry/. "$DEST/foundry/"
cp CLAUDE.md "$DEST/CLAUDE.md"

# Personalize the DESIGN.md header
sed -i.bak "s/\[Client Name\]/${CLIENT_NAME}/" "$DEST/DESIGN.md" && rm "$DEST/DESIGN.md.bak"

echo "Created $DEST"
echo "Next steps:"
echo "  1. cd $DEST"
echo "  2. Fill in DESIGN.md from the discovery call"
echo "  3. git init && git add -A && git commit -m 'Initial scaffold'"
echo "  4. npm install"
echo "  5. Open Claude Code in this directory and start building"
