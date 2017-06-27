#!/bin/bash

branch_name=$(git symbolic-ref -q HEAD)
branch_name=${branch_name##refs/heads/}
branch_name=${branch_name:-HEAD}

echo
echo "Attempting to upload ${branch_name} branch..."

if [ ${branch_name} = 'master' ]
then 
  echo "Don't upload from master branch! Change branch and try again."
  exit 1
fi
echo
git add .
echo
git rebase --continue
echo
git push origin ${branch_name}
