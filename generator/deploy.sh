#!/bin/bash

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

checkout_current_branch() {
  git checkout $TRAVIS_BRANCH
}

erase_existing_docs() {
  pushd ../docs/data-model/types
  rm !("README.md")
  popd
}

commit_generated_files() {
  git add ../docs/data-model/types/*
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
erase_existing_docs

echo "npm install:"
npm install

echo "Generating data model documentation..."
npm run start

echo "Commit Generated Files:"
commit_generated_files

echo "Push Files:"
push_files
