import { NextRequest, NextResponse } from "next/server"
import { submitWaitlistEmail } from "@/lib/google-sheets"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

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

    const result = await submitWaitlistEmail(email)

    if (result.success) {
      return NextResponse.json(
        { success: true, message: "Successfully added to waitlist" },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { success: false, message: result.message || "Failed to add to waitlist" },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Error in waitlist API:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}

