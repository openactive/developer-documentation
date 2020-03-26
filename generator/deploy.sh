#!/bin/bash

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

checkout_current_branch() {
  git checkout $TRAVIS_BRANCH
}

erase_existing_docs_except_readme() {
  find ../docs/data-model/types -type f -maxdepth 1 ! -name README.md -delete
}

commit_generated_files() {
  git add ../docs/data-model/types/*
  git add ../docs/SUMMARY.md
  git status
  git commit --message "Updating auto-generated model documentation: $TRAVIS_BUILD_NUMBER [ci skip]"
}

push_files() {
  git remote add origin-branch https://${GH_TOKEN}@github.com/openactive/developer-documentation.git > /dev/null 2>&1
  git push --quiet --set-upstream origin-branch $TRAVIS_BRANCH
}

echo "Git version:"
git --version

echo "Setup Git:"
setup_git

echo "Checkout master:"
checkout_current_branch

echo "Erase existing data model documentation..."
erase_existing_docs_except_readme

echo "npm install:"
npm install
npm ls @openactive/data-models

echo "Generating data model documentation..."
npm run start

echo "Commit Generated Files:"
commit_generated_files

echo "Push Files:"
push_files
