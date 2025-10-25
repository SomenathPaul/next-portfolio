import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Message from "@/models/Message";

export const runtime = "nodejs";        // ensure Node.js runtime (not Edge)
export const dynamic = "force-dynamic"; // avoid static caching for POST

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation (defensive; client should also validate)
    if (!name || name.trim().length < 2)
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    if (!message || message.trim().length < 5)
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });

    await dbConnect();
    const doc = await Message.create({ name: name.trim(), email: email.trim(), message: message.trim() });

    return NextResponse.json({ success: true, id: doc._id }, { status: 201 });
  } catch (err) {
    console.error("POST /api/contact error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

/**
 * OPTIONAL: For quick local testing only.
 * Remove or protect before production (e.g., with auth).
 */
export async function GET() {
  try {
    await dbConnect();
    const messages = await Message.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: messages });
  } catch (err) {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
