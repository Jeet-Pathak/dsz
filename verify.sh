#!/bin/bash

# Verification script - Run this before deployment
# This ensures everything is set up correctly

echo "╔════════════════════════════════════════════════════════════╗"
echo "║         DSZ Pre-Deployment Verification Checklist          ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

FAILED=0

# Check 1: Node.js installation
echo "✓ Checking Node.js installation..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo "  ✅ Node.js $NODE_VERSION is installed"
else
    echo "  ❌ Node.js not found. Please install Node.js from https://nodejs.org/"
    FAILED=$((FAILED + 1))
fi
echo ""

# Check 2: npm installation
echo "✓ Checking npm installation..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    echo "  ✅ npm $NPM_VERSION is installed"
else
    echo "  ❌ npm not found"
    FAILED=$((FAILED + 1))
fi
echo ""

# Check 3: Dependencies installed
echo "✓ Checking dependencies..."
if [ -d "node_modules" ]; then
    echo "  ✅ node_modules directory exists"
else
    echo "  ⚠️  node_modules not found. Run: npm install"
fi
echo ""

# Check 4: Environment file
echo "✓ Checking environment setup..."
if [ -f ".env.local" ]; then
    echo "  ✅ .env.local file exists"
    
    # Check if Firebase keys are configured
    if grep -q "VITE_FIREBASE_API_KEY" .env.local; then
        if [ $(grep "VITE_FIREBASE_API_KEY" .env.local | grep -c "your_") -gt 0 ]; then
            echo "  ⚠️  Firebase API key not configured (still has placeholder)"
        else
            echo "  ✅ Firebase API key configured"
        fi
    else
        echo "  ❌ VITE_FIREBASE_API_KEY not found in .env.local"
        FAILED=$((FAILED + 1))
    fi
else
    echo "  ❌ .env.local not found. Copy from .env.example and configure"
    FAILED=$((FAILED + 1))
fi
echo ""

# Check 5: .gitignore configuration
echo "✓ Checking .gitignore..."
if grep -q ".env.local" .gitignore; then
    echo "  ✅ .env.local in .gitignore"
else
    echo "  ⚠️  .env.local not in .gitignore - add it!"
fi

if grep -q "node_modules" .gitignore; then
    echo "  ✅ node_modules in .gitignore"
else
    echo "  ⚠️  node_modules not in .gitignore"
fi

if grep -q "dist" .gitignore; then
    echo "  ✅ dist in .gitignore"
else
    echo "  ⚠️  dist not in .gitignore"
fi
echo ""

# Check 6: Project files
echo "✓ Checking project structure..."
FILES=("package.json" "vite.config.js" "vercel.json" "src/main.jsx" "src/App.jsx")
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✅ $file"
    else
        echo "  ❌ $file missing"
        FAILED=$((FAILED + 1))
    fi
done
echo ""

# Check 7: Git configuration
echo "✓ Checking Git setup..."
if [ -d ".git" ]; then
    echo "  ✅ Git repository initialized"
    
    if git config user.email &> /dev/null; then
        USER_EMAIL=$(git config user.email)
        echo "  ✅ Git user email: $USER_EMAIL"
    else
        echo "  ⚠️  Git user email not configured. Run:"
        echo "     git config user.email 'your@email.com'"
    fi
    
    if git config user.name &> /dev/null; then
        USER_NAME=$(git config user.name)
        echo "  ✅ Git user name: $USER_NAME"
    else
        echo "  ⚠️  Git user name not configured. Run:"
        echo "     git config user.name 'Your Name'"
    fi
else
    echo "  ⚠️  Not a git repository. Initialize with: git init"
fi
echo ""

# Check 8: Build test
echo "✓ Checking if project builds..."
if npm run build &> /dev/null; then
    echo "  ✅ Production build successful"
    if [ -d "dist" ]; then
        FILE_COUNT=$(find dist -type f | wc -l)
        echo "  ✅ Build output: $FILE_COUNT files in dist/"
    fi
else
    echo "  ❌ Build failed. Check for errors"
    FAILED=$((FAILED + 1))
fi
echo ""

# Check 9: No API keys in git
echo "✓ Checking for exposed API keys..."
if git log -p --diff-merges=off | grep -q "AIzaSyBR871CYdDvPPU5ksNY"; then
    echo "  ❌ API key found in git history! This is a security risk!"
    FAILED=$((FAILED + 1))
else
    echo "  ✅ No API keys in git history"
fi
echo ""

# Final summary
echo "╔════════════════════════════════════════════════════════════╗"
if [ $FAILED -eq 0 ]; then
    echo "║                  ✅ ALL CHECKS PASSED!                    ║"
    echo "║                                                            ║"
    echo "║   You're ready to deploy to Vercel. Run:                  ║"
    echo "║                                                            ║"
    echo "║   git add .                                               ║"
    echo "║   git commit -m 'Convert to React with secure setup'      ║"
    echo "║   git push origin main                                    ║"
    echo "║                                                            ║"
    echo "║   Then go to https://vercel.com/new                       ║"
else
    echo "║              ❌ $FAILED CHECK(S) FAILED                  ║"
    echo "║                                                            ║"
    echo "║   Please fix the issues above before deploying            ║"
fi
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

if [ $FAILED -eq 0 ]; then
    exit 0
else
    exit 1
fi
