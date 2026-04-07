#!/bin/bash

# DSZ React Setup & Deployment Script
# This script helps you get started with the React version of DSZ

echo "╔════════════════════════════════════════════╗"
echo "║   DSZ - Debkanta Study Zone Setup          ║"
echo "║   React + Vite + Firebase + Vercel         ║"
echo "╚════════════════════════════════════════════╝"
echo ""

# Step 1: Install dependencies
echo "📦 Step 1: Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ npm install failed. Make sure you have Node.js installed."
    exit 1
fi
echo "✅ Dependencies installed"
echo ""

# Step 2: Check environment setup
echo "🔐 Step 2: Checking environment variables..."
if [ ! -f ".env.local" ]; then
    echo "⚠️  .env.local not found. Creating from template..."
    cp .env.example .env.local
    echo "📝 Created .env.local - update it with your Firebase credentials"
fi
echo "✅ Environment check complete"
echo ""

# Step 3: Test local build
echo "🔨 Step 3: Testing production build..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Check console for errors."
    exit 1
fi
echo "✅ Build successful - dist/ folder is ready"
echo ""

# Step 4: Show next steps
echo "╔════════════════════════════════════════════╗"
echo "║          🎉 SETUP COMPLETE! 🎉            ║"
echo "╚════════════════════════════════════════════╝"
echo ""
echo "📋 Next Steps:"
echo ""
echo "1️⃣  Local Development:"
echo "   npm run dev"
echo "   → Opens http://localhost:3000"
echo ""
echo "2️⃣  Before Committing:"
echo "   git add ."
echo "   git commit -m 'Convert to React with secure env setup'"
echo "   git push origin main"
echo ""
echo "3️⃣  Deploy to Vercel:"
echo "   → Go to https://vercel.com/new"
echo "   → Select this GitHub repository"
echo "   → Add environment variables (see DEPLOYMENT.md)"
echo "   → Click Deploy"
echo ""
echo "📖 Documentation:"
echo "   • README.md - Project overview & structure"
echo "   • DEPLOYMENT.md - Step-by-step deployment guide"
echo "   • .env.example - Environment variables template"
echo ""
echo "⚠️  Important:"
echo "   • Never commit .env.local to git"
echo "   • Use Vercel environment variables for production"
echo "   • Keep API keys secure!"
echo ""
echo "🚀 You're all set! Start with: npm run dev"
