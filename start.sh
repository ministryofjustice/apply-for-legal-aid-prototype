#!/bin/sh

set -euo pipefail
# maybe replace 5 and 6 with - npm run serve
node ./node_modules/gulp/bin/gulp generate-assets \
  && node listen-on-port.js
