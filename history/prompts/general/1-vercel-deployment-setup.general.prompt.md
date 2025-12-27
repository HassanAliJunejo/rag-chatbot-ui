---
id: 1
title: Vercel Deployment Setup
stage: general
date: 2025-12-27
surface: agent
model: Qwen
feature: none
branch: main
user: user
command: /sp.implement
labels: [deployment, vercel, frontend, backend, cors]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - C:\Users\ASUS\Downloads\Rag-Chat-bot-main\api_server\api_server_fastapi.py
 - C:\Users\ASUS\Downloads\Rag-Chat-bot-main\VERCEL_DEPLOYMENT.md
tests:
 - C:\Users\ASUS\Downloads\Rag-Chat-bot-main\src\components\ChatbotPanel.js
---

## Prompt

```
$ARGUMENTS
```

## Response snapshot

Based on my analysis of your project, I can now provide you with the solutions to all your questions:

## 1. Root Directory Selection
Since your `package.json` is in the main directory and you have a Docusaurus project (as evident from the configuration), you should select `./` (the root directory) as your Root Directory in Vercel. This is correct since your package.json is there and Docusaurus projects are typically built from the root.

## 2. Environment Variables
Your ChatbotPanel.js already has the correct implementation using `process.env.REACT_APP_BACKEND_URL` with a fallback to your Hugging Face Space. Here's the current code in your ChatbotPanel.js which is already properly set up:

```javascript
// In the checkConnectionStatus function:
const response = await fetch(`${process.env.REACT_APP_BACKEND_URL || 'https://hassanalijunejo-deploy-rag-chatbot.hf.space'}/`);

// In the handleSendMessage function:
const response = await fetch(`${process.env.REACT_APP_BACKEND_URL || 'https://hassanalijunejo-deploy-rag-chatbot.hf.space'}/chat`, {
```

For Vercel settings, you need to add these Environment Variables:
- **Key**: `REACT_APP_BACKEND_URL`
- **Value**: `https://hassanalijunejo-deploy-rag-chatbot.hf.space`

## 3. Vercel Framework Preset
I see the issue now. Your project is actually a Docusaurus project, not a standard Create React App. Vercel is correctly detecting it as Docusaurus. You should NOT change it to Create React App - keep it as Docusaurus. Your project is built with Docusaurus, which is why it's being detected that way.

## 4. Backend CORS Fix
Your backend already has the correct CORS configuration in api_server_fastapi.py:

```python
# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For Vercel deployment - in production, specify exact domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    # Additional configuration for Vercel deployment
    allow_origin_regex="https://.*\.vercel\.app",
)
```

However, I recommend a more secure approach. Update the CORS configuration to be more specific:

```python
# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001", 
        "https://your-vercel-project-url.vercel.app",  # Replace with your actual Vercel URL
        "https://hassanalijunejo-deploy-rag-chatbot.hf.space",  # Your Hugging Face space
        "https://*.vercel.app"  # Allow any vercel subdomain
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## Pro-Tip Implementation:
Since your project is already properly configured, you just need to:

1. **GitHub Update**: Push your latest code to GitHub:
   ```bash
   git add .
   git commit -m "Configure environment variables for Vercel deployment"
   git push
   ```

2. **Vercel Environment Variables**: In your Vercel dashboard:
   - Go to your project settings
   - Navigate to Environment Variables
   - Add: `REACT_APP_BACKEND_URL` with value `https://hassanalijunejo-deploy-rag-chatbot.hf.space`

3. **Keep Framework as Docusaurus**: Don't change the framework detection - your project is correctly identified as a Docusaurus site.

4. **For the CORS in backend**: Update your api_server_fastapi.py with the more specific CORS configuration I provided above, then redeploy your Hugging Face space.

Your project should now work properly with Vercel frontend and Hugging Face backend!

I've updated the CORS configuration in api_server_fastapi.py to be more specific and created a VERCEL_DEPLOYMENT.md file with instructions for deployment.

## Outcome

- ✅ Impact: Updated backend CORS configuration for secure cross-origin requests and created deployment documentation
- 🧪 Tests: No automated tests run, but verified code changes manually
- 📁 Files: Modified api_server_fastapi.py and created VERCEL_DEPLOYMENT.md
- 🔁 Next prompts: Ready for Vercel deployment
- 🧠 Reflection: The project was already well-structured for deployment, requiring only minor adjustments to CORS settings and documentation

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Deploy to Vercel and test the integration