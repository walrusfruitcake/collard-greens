#!/bin/sh
set -e

changed_files=$(git status --porcelain | wc -l)
if [ $changed_files -ne 0 ]; then
  git status
  echo
  echo "^^^YOU GOT SOME UNCOMMITTED CHANGED IN 'ERE"
  echo
  exit 1
fi

npm run test:once
git push
