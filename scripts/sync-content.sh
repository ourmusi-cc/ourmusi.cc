#!/usr/bin/env bash
# sync-content.sh
# Copies OVL workspace JSON records into Astro content collection directories.
# Run from the ourmusi.cc site root, or from any directory:
#   ./scripts/sync-content.sh
#
# The workspace JSON files are the single source of truth. This script is a
# build step — run it after any workspace data changes before building the site.
# Add it to a git pre-commit hook or CI step as needed.

set -euo pipefail

SITE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
WORKSPACE_DIR="$(cd "$SITE_DIR/../../.." && pwd)/workspace"
CONTENT_DIR="$SITE_DIR/src/content"

echo "Site:      $SITE_DIR"
echo "Workspace: $WORKSPACE_DIR"
echo ""

# ── Artists ──────────────────────────────────────────────────────────────────
ARTISTS_OUT="$CONTENT_DIR/artists"
mkdir -p "$ARTISTS_OUT"

for artist_json in "$WORKSPACE_DIR"/artists/*/artist.json; do
  artist_dir="$(dirname "$artist_json")"
  artist_id="$(basename "$artist_dir")"
  dest="$ARTISTS_OUT/$artist_id.json"
  cp "$artist_json" "$dest"
  echo "  copied  artists/$artist_id.json"
done

# ── Releases ─────────────────────────────────────────────────────────────────
RELEASES_OUT="$CONTENT_DIR/releases"
mkdir -p "$RELEASES_OUT"

for release_json in "$WORKSPACE_DIR"/artists/*/releases/*/release.json; do
  release_dir="$(dirname "$release_json")"
  release_id="$(basename "$release_dir")"
  artist_dir="$(dirname "$(dirname "$release_dir")")"
  artist_id="$(basename "$artist_dir")"
  dest="$RELEASES_OUT/${artist_id}--${release_id}.json"
  cp "$release_json" "$dest"
  echo "  copied  releases/${artist_id}--${release_id}.json"
done

echo ""
echo "Done. Content collections are in sync with workspace."
