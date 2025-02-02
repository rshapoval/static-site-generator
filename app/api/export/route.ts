import JSZip from "jszip";
import { NextResponse } from "next/server";

export const POST = async () => {
  try {
    const zip = new JSZip();

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exported Page</title>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <h1>Hello, world!</h1>
      </body>
      </html>
    `;

    const cssContent = `body { font-family: Arial, sans-serif; background: #f4f4f4; text-align: center; }`;

    zip.file("index.html", htmlContent);
    zip.file("styles.css", cssContent);

    const zipContent = await zip.generateAsync({ type: "nodebuffer" });

    const headers = new Headers({
      "Content-Disposition": "attachment; filename=static-site.zip",
      "Content-Type": "application/zip",
    });

    return new NextResponse(zipContent, { status: 200, headers });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 },
    );
  }
};
