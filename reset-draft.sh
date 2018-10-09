#!/bin/bash

git checkout master
git pull
git branch -D draft
git push origin --delete draft
git checkout -b draft
git push -u origin draft
git checkout master