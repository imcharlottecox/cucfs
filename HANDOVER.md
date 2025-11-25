# CUCFS Website – Handover Guide

This document explains how to take over maintenance of the CUCFS website, including editing the site, deploying changes, and handling the domain name.

---

## Live Site

The live website is deployed via **Cloudflare Pages** and available at:

```
https://www.cucfs.co.uk
```

> If the domain expires, future committees may need to re-register it. See Domain section below.

---

## 1. GitHub Codebase

This website is built using **React**, **TypeScript**, **Vite**, and **TailwindCSS**.

### Editing the site

You can use your **own personal GitHub account** to maintain the site:

1. **Fork this repo** into your personal GitHub account
2. Clone it to your local machine:
   ```bash
   git clone https://github.com/your-username/cucfs-website.git
   npm install
   npm run dev
   ```
3. Make changes locally and push to your own repo
4. Connect your repo to **Cloudflare Pages** to deploy

---

## 2. Cloudflare Pages Deployment

CUCFS uses a **shared Cloudflare account** (login via cucfs email).

This account handles automatic deployment every time changes are pushed to the connected GitHub repo.

### Reconnecting your fork

If you are working from a new fork:

1. Log into [Cloudflare](https://dash.cloudflare.com) using the cucfs credentials
2. Go to **Pages** → **Create new project**
3. Select your GitHub repo (you may need to re-authorise GitHub access)
4. Use these settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Output folder**: `dist`
5. Cloudflare will auto-build and deploy on every push

> You can also manually redeploy from the Cloudflare dashboard.

---

## 3. Domain Name – `cucfs.co.uk`

This domain was originally registered via **Squarespace**, under a **personal account** (not CUCFS).

### What happens when it expires?

If the domain expires and is not renewed:

- You can re-register it via **Cloudflare Registrar**, **Squarespace**, or any provider
- Once you own it, go to **Cloudflare Pages → Custom Domains**, and re-add `cucfs.co.uk`
- Set DNS records in the **CUCFS Cloudflare dashboard** to point to the Pages project
