import { NextRequest, NextResponse } from "next/server"
import { submitDemoRequest } from "@/lib/google-sheets"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      )
    }

    const result = await submitDemoRequest({
      name: name || "",
      email,
      company: company || "",
      message: message || "",
    })

    if (result.success) {
      return NextResponse.json(
        { success: true, message: "Demo request submitted successfully" },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { success: false, message: result.message || "Failed to submit demo request" },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Error in demo API:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}

