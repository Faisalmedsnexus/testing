import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");
  if (!file) {
    return NextResponse.json({ message: "No file found", success: false });
  }

  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const filePath = path.join(process.cwd(), "public", file.name);

  try {
    await fs.writeFile(filePath, buffer);
    return NextResponse.json({
      message: "File uploaded successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ message: "File upload failed", success: false });
  }
}
