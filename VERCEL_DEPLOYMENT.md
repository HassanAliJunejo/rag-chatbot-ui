# Vercel Deployment Guide

This document provides instructions for deploying the frontend to Vercel and configuring the necessary settings.

## Environment Variables

When deploying to Vercel, you need to set the following environment variable:

- **Key**: `REACT_APP_BACKEND_URL`
- **Value**: `https://hassanalijunejo-deploy-rag-chatbot.hf.space`

This allows the frontend to communicate with your deployed backend on Hugging Face Spaces.

## Framework Detection

This project is built with Docusaurus, which Vercel correctly detects. Do not change the framework preset from Docusaurus to Create React App.

## Root Directory

Since the `package.json` file is in the root directory, set the Root Directory to `./` (root) in Vercel settings.

## Backend CORS Configuration

The backend API server is configured to allow requests from:
- `http://localhost:3000`
- `http://localhost:3001`
- `https://*.vercel.app` (any Vercel subdomain)
- `https://hassanalijunejo-deploy-rag-chatbot.hf.space` (your Hugging Face space)

## Deployment Steps

1. Push your latest code to GitHub:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push
   ```

2. In Vercel dashboard:
   - Import your GitHub repository
   - Set Root Directory to `./`
   - Add the environment variable as specified above
   - Keep the framework as Docusaurus
   - Deploy the project

3. After deployment, your frontend will be accessible at the URL provided by Vercel