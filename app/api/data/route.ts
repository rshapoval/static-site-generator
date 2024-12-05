import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

const filePath = path.join(process.cwd(), "data", "data.json");

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath));
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json(
      { message: "Data saved successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error while saving data:", error);
    return NextResponse.json(
      { message: "Error while saving data.", error },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { message: "Data file does not exist." },
        { status: 404 },
      );
    }

    const fileData = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileData);

    return NextResponse.json(
      { message: "Data retrieved successfully!", data: jsonData },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error while retrieving data:", error);
    return NextResponse.json(
      { message: "Error while retrieving data.", error },
      { status: 500 },
    );
  }
}
