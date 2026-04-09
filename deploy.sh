#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Portfolio Deployment to Netlify${NC}\n"

# Check if in correct directory
if [ ! -f "package.json" ]; then
    echo -e "${YELLOW}⚠️  Error: package.json not found${NC}"
    echo "Please run this script from the hrsalazar.github.io directory"
    exit 1
fi

# Step 1: Install dependencies
echo -e "${BLUE}📦 Step 1: Installing dependencies...${NC}"
npm install
if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️  npm install failed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Dependencies installed${NC}\n"

# Step 2: Build project
echo -e "${BLUE}🔨 Step 2: Building project...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️  Build failed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Project built successfully${NC}\n"

# Step 3: Check if netlify-cli is installed
echo -e "${BLUE}🔍 Step 3: Checking Netlify CLI...${NC}"
if ! command -v netlify &> /dev/null; then
    echo -e "${YELLOW}📥 Installing Netlify CLI globally...${NC}"
    npm install -g netlify-cli
fi
echo -e "${GREEN}✓ Netlify CLI ready${NC}\n"

# Step 4: Deploy
echo -e "${BLUE}🌐 Step 4: Deploying to Netlify...${NC}"
netlify deploy --prod --dir=dist

if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}✅ Deployment successful!${NC}"
    echo -e "${GREEN}Visit your site URL shown above${NC}\n"
else
    echo -e "\n${YELLOW}⚠️  Deployment encountered an issue${NC}"
    echo "Check the error messages above"
    exit 1
fi
