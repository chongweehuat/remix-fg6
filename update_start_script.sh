#!/bin/bash

# Check if jq is installed
if ! command -v jq &> /dev/null; then
  echo "jq is not installed. Installing..."

  # Install jq based on the operating system
  if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    sudo apt-get update
    sudo apt-get install -y jq
  elif [[ "$OSTYPE" == "darwin"* ]]; then
    brew install jq
  else
    echo "Unsupported operating system. Please install jq manually."
    exit 1
  fi

  echo "jq installed successfully."
fi

# Determine which script to copy based on an environment variable or argument
if [ "$1" == "draft" ]; then
  SOURCE_SCRIPT="draft"
elif [ "$1" == "published" ]; then
  SOURCE_SCRIPT="published"
else
  echo "Usage: $0 <draft|published>"
  exit 1
fi

# Extract the script content from package.json
SCRIPT_CONTENT=$(jq -r ".scripts.$SOURCE_SCRIPT" package.json)

# Update the "start" script in package.json
jq ".scripts.start = \"$SCRIPT_CONTENT\"" package.json > temp.json && mv temp.json package.json

echo "Successfully updated 'start' script in package.json with the '$SOURCE_SCRIPT' script."