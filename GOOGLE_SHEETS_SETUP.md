# Google Sheets Integration Setup Guide

This guide will help you set up the Google Sheets integration using Google Apps Script.

## Step 1: Create Your Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Replace the default code with the following:

```javascript
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get or create the spreadsheet
    const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID'; // Replace with your Google Sheet ID
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // Determine which sheet to use based on the type
    let sheetName = data.sheetName || 'Sheet1';
    let sheet = spreadsheet.getSheetByName(sheetName);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(sheetName);
    }
    
    // Get headers (first row)
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    // Prepare row data
    const rowData = [];
    
    // If headers exist, match data to headers
    if (headers.length > 0) {
      headers.forEach(header => {
        rowData.push(data[header] || '');
      });
    } else {
      // If no headers, create them and add data
      const keys = Object.keys(data);
      keys.forEach(key => {
        if (key !== 'sheetName') {
          rowData.push(data[key]);
        }
      });
      
      // Set headers if this is the first row
      if (sheet.getLastRow() === 0) {
        const headerKeys = keys.filter(k => k !== 'sheetName');
        sheet.getRange(1, 1, 1, headerKeys.length).setValues([headerKeys]);
      }
    }
    
    // Append the row
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data added successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ message: 'Google Sheets API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Step 2: Get Your Google Sheet ID

1. Open your Google Sheet
2. Look at the URL: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`
3. Copy the `YOUR_SHEET_ID` part
4. Replace `YOUR_SPREADSHEET_ID` in the script with your actual Sheet ID

## Step 3: Set Up Sheet Structure

Create a Google Sheet with the following structure (or let the script create them automatically):

### Waitlist Sheet
- Headers: `email`, `type`, `timestamp`

### Signups Sheet
- Headers: `name`, `email`, `type`, `timestamp`

### Demo Requests Sheet
- Headers: `name`, `email`, `company`, `message`, `type`, `timestamp`

## Step 4: Deploy as Web App

1. In Apps Script, click "Deploy" > "New deployment"
2. Click the gear icon ⚙️ next to "Select type" and choose "Web app"
3. Set the following:
   - **Description**: "Mida MVP Integration"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone" (or "Anyone with Google account" if you want to restrict)
4. Click "Deploy"
5. Copy the **Web App URL** (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)

## Step 5: Configure Environment Variable

1. Create a `.env.local` file in your project root (copy from `.env.example`)
2. Add your Web App URL:

```
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. Restart your Next.js development server

## Step 6: Test the Integration

1. Submit a waitlist email on the homepage
2. Submit a signup form
3. Request a demo from the pricing section
4. Check your Google Sheet to verify the data is being added

## Troubleshooting

### CORS Errors
If you encounter CORS errors, make sure:
- The Web App is deployed with "Anyone" access
- The script has proper error handling

### Data Not Appearing
- Check the Apps Script execution logs (View > Executions)
- Verify the Sheet ID is correct
- Ensure the sheet names match (Waitlist, Signups, Demo Requests)

### Permission Errors
- Make sure the Apps Script has permission to access your Google Sheet
- Grant necessary permissions when prompted

## Security Notes

- The Web App URL will be exposed in your frontend code
- Consider adding basic validation or authentication in your Apps Script
- For production, consider using Google Sheets API with service account authentication

