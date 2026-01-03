/**
 * Utility functions for Google Sheets integration via Apps Script
 */

export interface GoogleSheetsData {
  [key: string]: string | number | boolean
}

/**
 * Submit data to Google Sheets via Apps Script Web App
 */
export async function submitToGoogleSheets(
  scriptUrl: string,
  data: GoogleSheetsData,
  sheetName?: string
): Promise<{ success: boolean; message?: string }> {
  try {
    const payload = {
      ...data,
      sheetName: sheetName || "Sheet1",
      timestamp: new Date().toISOString(),
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    // Handle 401 Unauthorized error
    if (response.status === 401) {
      return {
        success: false,
        message: "Authentication error (401). Your Google Apps Script web app needs to be deployed with 'Anyone' access. See GOOGLE_SHEETS_SETUP.md for instructions.",
      }
    }

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error")
      return {
        success: false,
        message: `HTTP error ${response.status}: ${errorText}`,
      }
    }

    const result = await response.text()
    return { success: true, message: result || "Data submitted successfully" }
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error)
    
    // Check if it's a network/CORS error
    if (error instanceof TypeError && error.message.includes("fetch")) {
      return {
        success: false,
        message: "Network error. Please check your Google Apps Script deployment settings and ensure CORS is enabled.",
      }
    }
    
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}

/**
 * Submit waitlist email to Google Sheets
 */
export async function submitWaitlistEmail(email: string): Promise<{ success: boolean; message?: string }> {
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ""
  
  if (!scriptUrl) {
    console.error("Google Script URL not configured")
    return { success: false, message: "Google Script URL not configured" }
  }

  return submitToGoogleSheets(scriptUrl, {
    email,
    type: "waitlist",
  }, "Waitlist")
}

/**
 * Submit signup data to Google Sheets
 */
export async function submitSignupData(data: {
  name: string
  email: string
  timestamp?: string
}): Promise<{ success: boolean; message?: string }> {
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ""
  
  if (!scriptUrl) {
    console.error("Google Script URL not configured")
    return { success: false, message: "Google Script URL not configured" }
  }

  return submitToGoogleSheets(scriptUrl, {
    name: data.name,
    email: data.email,
    type: "signup",
    timestamp: data.timestamp || new Date().toISOString(),
  }, "Signups")
}

/**
 * Submit demo request to Google Sheets
 */
export async function submitDemoRequest(data: {
  name?: string
  email: string
  company?: string
  message?: string
}): Promise<{ success: boolean; message?: string }> {
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ""
  
  if (!scriptUrl) {
    console.error("Google Script URL not configured")
    return { success: false, message: "Google Script URL not configured" }
  }

  return submitToGoogleSheets(scriptUrl, {
    name: data.name || "",
    email: data.email,
    company: data.company || "",
    message: data.message || "",
    type: "demo_request",
    timestamp: new Date().toISOString(),
  }, "Demo Requests")
}

