import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";
import JSZip from "jszip";
import fs from "fs";
import path from "path";

const execPromise = promisify(exec);

export const POST = async () => {
  try {
    const globalsCSSPath = path.join(process.cwd(), "app", "globals.css");
    const outputCSSPath = path.join(process.cwd(), "public", "tmp-styles.css");

    await execPromise(
      `npx tailwindcss -i ${globalsCSSPath} -o ${outputCSSPath}`,
    );

    const compiledCSS = fs.readFileSync(outputCSSPath, "utf8");

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
        <h1 class="button">Hello, world!</h1>
      </body>
      </html>`;

    zip.file("index.html", htmlContent);
    zip.file("styles.css", compiledCSS);

    const zipContent = await zip.generateAsync({ type: "nodebuffer" });

    fs.unlinkSync(outputCSSPath);
    fs.unlinkSync(outputCSSPath + ".map");

    const headers = new Headers({
      "Content-Disposition": "attachment; filename=export.zip",
      "Content-Type": "application/zip",
    });

    return new NextResponse(zipContent, { status: 200, headers });
  } catch (error) {
    console.error("Export error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 },
    );
  }
};
