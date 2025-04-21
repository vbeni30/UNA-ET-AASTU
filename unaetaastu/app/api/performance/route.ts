import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // In a real implementation, you would store this data in a database
    // or send it to an analytics service
    console.log("Performance data received:", data)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing performance data:", error)
    return NextResponse.json({ success: false, error: "Failed to process data" }, { status: 500 })
  }
}
