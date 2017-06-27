#!/bin/bash

branch_name=$(git symbolic-ref -q HEAD)
branch_name=${branch_name##refs/heads/}
branch_name=${branch_name:-HEAD}

echo
echo "Attempting to fetch upstream master to ${branch_name} branch..."

echo
echo "Git says:"
git pull --rebase upstream master &> out.out

cat out.out

echo
if grep -q "error" out.out
then
  if [ ${branch_name} = 'master' ]
  then 
    echo "Don't work in master branch!"
    echo -n "Name of new feature branch: "
    read NEW_BRANCH
    git checkout -b ${NEW_BRANCH}
  else 
    echo "Commit changes and try again"
  fi
else
  echo "Fix merge conflicts if any and then run upload.sh"
fi

\rm -f out.out
echo