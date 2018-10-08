#!/bin/bash

git checkout master
git branch -d playground
git checkout -b playground
git push --force -u origin playground
date > .playground
git add .playground
git commit -m "== RESET PLAYGROUND =="
git push -u origin playground
git checkout master