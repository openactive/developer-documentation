#!/bin/bash

git checkout master
git pull
git branch -D draft
git checkout -b draft
git push --force -u origin draft
git checkout master