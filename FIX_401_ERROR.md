# How to Fix 401 Error with Google Apps Script

If you're getting a **401 Unauthorized** error, it means your Google Apps Script web app is not configured to allow public access.

## Quick Fix Steps:

### 1. Open Your Google Apps Script Project
Go to: https://script.google.com/u/0/home/projects/1haFN75jONgxWnoXGctWvzVUrRE4cy_sAEtYF_m1tiDEKjKT1Uwubre18/edit

### 2. Deploy as Web App

1. Click **"Deploy"** in the top right
2. Click **"New deployment"**
3. Click the gear icon ⚙️ next to "Select type"
4. Choose **"Web app"**

### 3. Configure Deployment Settings

Set these **EXACT** settings:

- **Description**: `Mida MVP Integration` (or any name you want)
- **Execute as**: **"Me"** (your email)
- **Who has access**: **"Anyone"** ⚠️ **THIS IS CRITICAL!**

**IMPORTANT**: You MUST select **"Anyone"** (not "Anyone with Google account") to avoid 401 errors.

### 4. Deploy

1. Click **"Deploy"**
2. **Authorize** the script when prompted:
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" → "Go to [Project Name] (unsafe)"
   - Click "Allow"
3. Copy the **Web App URL** (it looks like: `https://script.google.com/macros/s/.../exec`)

### 5. Update Your .env.local File

Make sure your `.env.local` file has:
```
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual ID from your deployment URL.

### 6. Restart Your Development Server

After updating the environment variable:
1. Stop your server (Ctrl+C)
2. Start it again: `pnpm dev`

## Verify It's Working

1. Try submitting a waitlist email
2. Check your Google Sheet - data should appear
3. If you still get errors, check the browser console for more details

## Common Issues:

### Still Getting 401?
- Make sure you selected **"Anyone"** (not "Anyone with Google account")
- Try creating a **new deployment** (don't just update the existing one)
- Make sure you authorized the script when prompted

### Getting CORS Errors?
- Make sure the web app is deployed with "Anyone" access
- Check that your Apps Script code handles CORS properly (the provided code does)

### Data Not Appearing in Sheet?
- Check the Apps Script execution logs (View → Executions)
- Verify your Sheet ID is correct in the script
- Make sure the sheet names match (Waitlist, Signups, Demo Requests)

## Need Help?

If you're still having issues:
1. Check the Apps Script execution logs for errors
2. Verify your Google Sheet ID is correct
3. Make sure the script has permission to access your sheet
4. Try testing the web app URL directly in a browser (you should see a JSON response)

