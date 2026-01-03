/**
 * Google Apps Script for Mida MVP - Google Sheets Integration
 * 
 * Instructions:
 * 1. Copy this code to your Google Apps Script project
 * 2. Replace YOUR_SPREADSHEET_ID with your actual Google Sheet ID
 * 3. Deploy as a Web App with "Anyone" access
 * 4. Copy the Web App URL and add it to your .env.local file as NEXT_PUBLIC_GOOGLE_SCRIPT_URL
 */

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get or create the spreadsheet
    // REPLACE THIS WITH YOUR GOOGLE SHEET ID
    const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // Determine which sheet to use based on the type or sheetName
    let sheetName = data.sheetName || 'Sheet1';
    
    // Map data types to sheet names
    if (data.type === 'waitlist') {
      sheetName = 'Waitlist';
    } else if (data.type === 'signup') {
      sheetName = 'Signups';
    } else if (data.type === 'demo_request') {
      sheetName = 'Demo Requests';
    }
    
    let sheet = spreadsheet.getSheetByName(sheetName);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(sheetName);
    }
    
    // Get headers (first row)
    const lastColumn = sheet.getLastColumn();
    let headers = [];
    
    if (lastColumn > 0) {
      headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
    }
    
    // Prepare row data
    const rowData = [];
    
    // If headers exist, match data to headers
    if (headers.length > 0 && headers[0] !== '') {
      headers.forEach(header => {
        if (header && data.hasOwnProperty(header)) {
          rowData.push(data[header]);
        } else {
          rowData.push('');
        }
      });
    } else {
      // If no headers, create them and add data
      const keys = Object.keys(data);
      const headerKeys = keys.filter(k => k !== 'sheetName');
      
      // Set headers if this is the first row
      if (sheet.getLastRow() === 0) {
        sheet.getRange(1, 1, 1, headerKeys.length).setValues([headerKeys]);
      }
      
      // Add data matching headers
      const currentHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      currentHeaders.forEach(header => {
        rowData.push(data[header] || '');
      });
    }
    
    // Append the row
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data added successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error for debugging
    Logger.log('Error: ' + error.toString());
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Health check endpoint
  return ContentService
    .createTextOutput(JSON.stringify({ 
      message: 'Google Sheets API is running',
      status: 'ok'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

