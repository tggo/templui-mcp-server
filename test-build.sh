#!/bin/bash

# Test build script for TemplUI MCP Server

echo "🚀 Testing TemplUI MCP Server build..."

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Build TypeScript
echo "🔨 Building TypeScript..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Failed to build TypeScript"
    exit 1
fi

# Check if build output exists
if [ ! -f "build/index.js" ]; then
    echo "❌ Build output not found"
    exit 1
fi

# Make the binary executable
chmod +x build/index.js

# Test help command
echo "🧪 Testing help command..."
node build/index.js --help

if [ $? -ne 0 ]; then
    echo "❌ Help command failed"
    exit 1
fi

echo "✅ Build test completed successfully!"
echo ""
echo "🎉 You can now run the server with:"
echo "   node build/index.js"
echo "   or"
echo "   npm start"
echo ""
echo "📖 For more information, see README.md"