#!/bin/bash

git checkout master
git pull
git branch -d playground
git checkout -b playground
git push --force -u origin playground
git checkout master