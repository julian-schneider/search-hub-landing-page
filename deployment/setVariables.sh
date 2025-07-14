#!/bin/sh -eu
cat <<EOF > /usr/share/nginx/html/config.js
window.REACT_APP_LANDING_URL = "${LANDING_URL:-undefined}";
window.REACT_APP_DATASETS_URL = "${DATASETS_URL:-undefined}";
window.REACT_APP_REPOSITORIES_URL = "${REPOSITORIES_URL:-undefined}";
EOF
