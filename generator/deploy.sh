#!/bin/bash

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_generated_files() {
  git status
  git add ../docs/data-model/types/*
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

echo "Git status:"
git status

setup_git
commit_generated_files
push_files
