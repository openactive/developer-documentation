#!/bin/bash

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_generated_files() {
  git checkout master
  git add ../docs/data-model/types/*
  git status
  git commit --message "Updating auto-generated model documentation: $TRAVIS_BUILD_NUMBER [ci skip]"
}

push_files() {
  git remote add origin-master https://${GH_TOKEN}@github.com/openactive/developer-documentation.git > /dev/null 2>&1
  git push --quiet --set-upstream origin-master master
}

echo "Git version:"
git --version

echo "Generating data model documentation..."
npm run start

echo "Setup Git:"
setup_git

echo "Commit Generated Files:"
commit_generated_files

echo "Push Files:"
push_files
