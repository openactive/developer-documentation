#!/bin/bash

echo "Git version:"
git --version

echo "Generating data model documentation..."
npm run start

echo "Git status:"
git status


