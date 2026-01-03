import { NextRequest, NextResponse } from "next/server"
import { submitSignupData } from "@/lib/google-sheets"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email } = body

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required" },
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

    const result = await submitSignupData({ name, email })

    if (result.success) {
      return NextResponse.json(
        { success: true, message: "Signup successful" },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { success: false, message: result.message || "Failed to process signup" },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Error in signup API:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}

