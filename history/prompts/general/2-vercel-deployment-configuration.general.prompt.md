---
id: 2
title: "Vercel Deployment Configuration for RAG Chatbot Frontend"
stage: "general"
date: "2025-12-27"
model: "Qwen Code"
feature: "none"
branch: "main"
user: "ASUS"
command: "/sp.implement"
labels: ["deployment", "vercel", "frontend", "configuration"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "src/components/ChatbotPanel.js"
  - "api_server/api_server_fastapi.py"
tests: []
---

# Vercel Deployment Configuration for RAG Chatbot Frontend

## User Input

Help deploy a RAG Chatbot frontend to Vercel. The backend is already deployed on Hugging Face Spaces. Need to fix 'Offline' status and '404 Not Found' errors.

## Implementation Summary

1. Updated ChatbotPanel.js to use environment variable for backend URL
2. Enhanced FastAPI backend CORS configuration for Vercel deployment
3. Provided complete Vercel deployment configuration guidance

## Changes Made

### 1. Updated ChatbotPanel.js
- Modified both health check and chat endpoints to use `process.env.REACT_APP_BACKEND_URL`
- Added fallback to the Hugging Face Spaces URL if environment variable is not set

### 2. Enhanced FastAPI CORS Configuration
- Added `allow_origin_regex="https://.*\.vercel\.app"` to allow requests from Vercel deployments
- Updated comments to indicate this is for Vercel deployment

### 3. Vercel Configuration Guidance
- Provided instructions for root directory selection
- Specified environment variable setup
- Explained framework preset selection
- Included CORS configuration details

## Outcome

The frontend should now properly connect to the backend deployed on Hugging Face Spaces when deployed to Vercel, resolving the 'Offline' status and '404 Not Found' errors.

## Follow-up Tasks

1. Deploy the updated frontend to Vercel
2. Verify connection to backend
3. Test chat functionality