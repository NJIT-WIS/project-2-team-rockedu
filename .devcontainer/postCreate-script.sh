#!/bin/sh

echo "Running post-create-script.sh"

# Install oh-my-zsh config
cp .devcontainer/.zshrc $HOME

# Install Chromium for playwright
# npx playwright install chromium