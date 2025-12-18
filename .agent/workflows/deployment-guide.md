---
description: Complete guide to deploy drone-stuff.com to Vercel with custom domain
---

# 🚀 Deployment Guide for drone-stuff.com

## Overview
This guide will help you deploy your React website to Vercel (FREE) and connect your custom domain **drone-stuff.com** from SiteGround.

---

## Part 1: Deploy to Vercel (FREE Hosting)

### Step 1: Create Vercel Account
1. Go to [https://vercel.com](https://vercel.com)
2. Click **"Sign Up"** button
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your GitHub Project
1. Once logged in, click **"Add New..."** → **"Project"**
2. In the "Import Git Repository" section, find your repository:
   - **Repository Name**: `Drones-Stuff`
   - **GitHub User**: `balajiprojects049-art`
3. Click **"Import"** next to your repository

### Step 3: Configure Project Settings
Vercel will auto-detect that this is a Vite project. Verify these settings:

- **Framework Preset**: Vite
- **Root Directory**: `./` (leave as is)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `dist` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

**Environment Variables**: None needed for this project

Click **"Deploy"** button

### Step 4: Wait for Deployment
- Vercel will install dependencies and build your project
- This usually takes 1-2 minutes
- You'll see a success screen with confetti 🎉
- Your site will be live at: `https://your-project-name.vercel.app`

---

## Part 2: Connect Custom Domain (drone-stuff.com)

### Step 5: Add Domain in Vercel
1. In your Vercel project dashboard, click **"Settings"** tab
2. Click **"Domains"** in the sidebar
3. In the "Add Domain" field, type: `drone-stuff.com`
4. Click **"Add"**
5. Also add the www version: `www.drone-stuff.com`
6. Click **"Add"** again

### Step 6: Get DNS Configuration from Vercel
After adding the domain, Vercel will show you DNS records that need to be configured. You'll see something like:

**For drone-stuff.com (apex domain):**
- **Type**: A
- **Name**: @ (or leave blank)
- **Value**: 76.76.21.21

**For www.drone-stuff.com:**
- **Type**: CNAME
- **Name**: www
- **Value**: cname.vercel-dns.com

*(Note: The actual IP address may be different - use the one Vercel shows you)*

---

## Part 3: Configure DNS in SiteGround

### Step 7: Access DNS Zone Editor
1. Log into your SiteGround account
2. Go to **"Websites"** → **"Manage My Domain"**
3. Find **"drone-stuff.com"** and click on it
4. Click the **"DNS ZONE EDITOR"** tab (you can see this tab in your screenshot)

### Step 8: Add DNS Records

#### Option A: Using Name Servers (Recommended - Easier)
1. In SiteGround, click the **"NAME SERVERS"** tab
2. Change nameservers to Vercel's:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
3. Click **"Save"**

#### Option B: Using DNS Records (Manual)
If you prefer to keep SiteGround nameservers:

1. In the **"DNS ZONE EDITOR"** tab, look for existing A records pointing to SiteGround
2. **Delete** or **modify** the existing A record for `@` (root domain)
3. Click **"Add New Record"**
4. Create an **A Record**:
   - **Name**: @ (or leave blank)
   - **Type**: A
   - **Points to**: 76.76.21.21 (use the IP from Vercel)
   - **TTL**: 1 hour
5. Click **"Add Record"**

6. Create a **CNAME Record** for www:
   - **Name**: www
   - **Type**: CNAME
   - **Points to**: cname.vercel-dns.com
   - **TTL**: 1 hour
7. Click **"Add Record"**

### Step 9: Wait for DNS Propagation
- DNS changes can take **5 minutes to 48 hours** to propagate globally
- Usually takes **15-30 minutes** for most users
- You can check status at: [https://dnschecker.org](https://dnschecker.org)
- Enter your domain: `drone-stuff.com`

### Step 10: Verify in Vercel
1. Go back to Vercel → Settings → Domains
2. Wait for the status to change from "Invalid Configuration" to "Valid Configuration"
3. Once verified, you'll see a green checkmark ✓
4. Vercel will automatically provision an SSL certificate (HTTPS)

---

## Part 4: Final Steps

### Step 11: Test Your Website
1. Open your browser
2. Visit: `https://drone-stuff.com`
3. Also test: `https://www.drone-stuff.com`
4. Both should redirect to HTTPS and show your website

### Step 12: Enable Automatic Deployments
- By default, Vercel automatically deploys when you push to GitHub
- Every time you push code to the `main` branch, Vercel will rebuild and deploy
- You can see deployment history in Vercel dashboard

---

## 🎯 Summary Checklist

- [ ] Vercel account created
- [ ] GitHub repository imported to Vercel
- [ ] Initial deployment successful
- [ ] Domain added in Vercel (drone-stuff.com & www.drone-stuff.com)
- [ ] DNS records configured in SiteGround
- [ ] DNS propagation complete (15-30 mins)
- [ ] SSL certificate issued (automatic)
- [ ] Website accessible at https://drone-stuff.com

---

## 🆘 Troubleshooting

### Issue: DNS Not Resolving
- **Solution**: Wait longer (DNS can take up to 48 hours)
- **Check**: Verify DNS records are correct in SiteGround
- **Tool**: Use [https://dnschecker.org](https://dnschecker.org) to check propagation

### Issue: SSL Certificate Error
- **Solution**: Wait 10-15 minutes after DNS propagation
- Vercel automatically provisions SSL certificates via Let's Encrypt
- If still failing, go to Vercel → Settings → Domains → Click "Refresh Certificate"

### Issue: Build Failed on Vercel
- **Solution**: Check the build logs in Vercel
- Common fixes:
  - Ensure `package.json` has correct scripts
  - Check for any missing dependencies
  - Verify Node.js version compatibility

### Issue: 404 on Routes (React Router)
- **Solution**: Vercel should auto-detect React Router
- If not, create a `vercel.json` file in your project root:
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }
  ```

---

## 📞 Need Help?
- **Vercel Docs**: [https://vercel.com/docs](https://vercel.com/docs)
- **SiteGround Support**: Available in your SiteGround dashboard
- **DNS Checker**: [https://dnschecker.org](https://dnschecker.org)

---

## 🎉 Your Website Will Be Live At:
- **Primary Domain**: https://drone-stuff.com
- **WWW Version**: https://www.drone-stuff.com
- **Vercel URL**: https://your-project.vercel.app (backup)

**Cost**: $0/month (Vercel Free Tier) - Perfect for your needs!
