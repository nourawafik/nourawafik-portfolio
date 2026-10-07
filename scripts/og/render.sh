#!/bin/sh
# Re-render the static OG images whose Arabic text next/og can't lay out
# (satori has no bidi support and mis-measures joined Arabic words).
# Usage: sh scripts/og/render.sh   (macOS, Google Chrome installed)
set -e
cd "$(dirname "$0")"
CHROME='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

render() { # <source.html> <output.png>
  profile=$(mktemp -d)
  rm -f "$2"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --no-first-run \
    --allow-file-access-from-files --force-device-scale-factor=1 \
    --user-data-dir="$profile" --virtual-time-budget=3000 \
    --window-size=1200,630 --screenshot="$2" "file://$PWD/$1" >/dev/null 2>&1 &
  pid=$!
  # Chrome often lingers after writing the screenshot; stop it once the file exists.
  i=0
  while [ ! -s "$2" ] && [ $i -lt 30 ]; do sleep 1; i=$((i + 1)); done
  sleep 1
  kill $pid 2>/dev/null || true
  [ -s "$2" ] && echo "rendered $2" || { echo "failed: $2" >&2; exit 1; }
}

render ar.html ../../src/app/ar/opengraph-image.png
render dayratna.html ../../src/content/og/dayratna.png
