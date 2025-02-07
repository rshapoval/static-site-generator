import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";
import JSZip from "jszip";
import fs from "fs";
import path from "path";
import { LandingData } from "@/interfaces/landing";

const execPromise = promisify(exec);

const addFolderToZip = (
  zip: JSZip,
  folderPath: string,
  zipPath: string = "",
): void => {
  const files = fs.readdirSync(folderPath);

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const fileZipPath = path.join(zipPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      const folderZip = zip.folder(fileZipPath);
      if (folderZip) addFolderToZip(folderZip, filePath);
    } else {
      zip.file(fileZipPath, new Uint8Array(fs.readFileSync(filePath)));
    }
  });
};

export const POST = async (): Promise<NextResponse> => {
  try {
    const globalsCSSPath: string = path.join(
      process.cwd(),
      "app",
      "globals.css",
    );
    const outputCSSPath: string = path.join(
      process.cwd(),
      "public",
      "tmp-styles.css",
    );
    const assetsPath: string = path.join(process.cwd(), "public", "assets");

    const dataPath = path.join(process.cwd(), "data", "data.json");
    const rawData = fs.readFileSync(dataPath, "utf-8");
    const data = JSON.parse(rawData) as LandingData;

    await execPromise(
      `npx tailwindcss -i ${globalsCSSPath} -o ${outputCSSPath}`,
    );

    const compiledCSS: string = fs.readFileSync(outputCSSPath, "utf8");

    const zip = new JSZip();

    const htmlContent: string = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exported Page</title>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <!-- Tailwind CSS Hero Sections Start -->
        <div class="bg-white">
          <header class="absolute inset-x-0 top-0 z-50">
            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
              <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Your Company</span>
                  <img class="h-8 w-auto" src="assets/tailwindcss-logo.svg" alt="">
                </a>
              </div>
              <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                  <span class="sr-only">Open main menu</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div>
              <div class="hidden lg:flex lg:gap-x-12">
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Product</a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Company</a>
              </div>
            </nav>
          </header>
          <div class="relative isolate px-6 pt-14 lg:px-8">
            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"><div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);"></div></div>
            <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  ${data["hero"]["h1"]}
                </h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                  ${data["hero"]["subtitle"]}
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                  <a href="${
                    data["hero"]["primary-link-url"]
                  }" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    ${data["hero"]["primary-link-text"]}
                  </a>
                  <a href="${
                    data["hero"]["primary-link-url"]
                  }" class="text-sm font-semibold leading-6 text-gray-900">
                    ${
                      data["hero"]["primary-link-text"]
                    } <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true"><div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);"></div></div>
          </div>
        </div>
        <!-- Tailwind CSS Hero Sections End -->
        <!-- Tailwind CSS Header Sections Start -->
        <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
          <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
          </div>
          <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
          </div>
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
              <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                ${data["header"]["title"]}
              </h2>
              <p class="mt-6 text-lg leading-8 text-gray-300">
                ${data["header"]["subtitle"]}
              </p>
            </div>
            <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                ${data["header"]["links"]
                  .map(
                    (item) => `
                      <a href="${item["value2"]}">
                        ${item["value1"]} <span aria-hidden="true">&rarr;</span>
                      </a>
                    `,
                  )
                  .join("")}
              </div>
              <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                ${data["header"]["stats"]
                  .map(
                    (item) => `
                      <div class="flex flex-col-reverse">
                        <dt class="text-base leading-7 text-gray-300">
                          ${item["value2"]}
                        </dt>
                        <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                          ${item["value1"]}
                        </dd>
                      </div>
                    `,
                  )
                  .join("")}
              </dl>
            </div>
          </div>
        </div>
        <!-- Tailwind CSS Header Sections End -->
        <!-- Tailwind CSS Feature Sections Start -->
        <div class="bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center">
              <h2 class="text-base font-semibold leading-7 text-indigo-600">${
                data["feature"]["label"]
              }</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">${
                data["feature"]["title"]
              }</p>
              <p class="mt-6 text-lg leading-8 text-gray-600">${
                data["feature"]["subtitle"]
              }</p>
            </div>
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                ${data["feature"]["features"]
                  .map(
                    (item) => `
                      <div class="relative pl-16">
                        <dt class="text-base font-semibold leading-7 text-gray-900">
                          <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                            <img src="${item["value1"]}" width="18" height="18" alt="${item["value2"]} image">
                          </div>
                          ${item["value2"]}
                        </dt>
                        <dd class="mt-2 text-base leading-7 text-gray-600">${item["value3"]}</dd>
                      </div>
                    `,
                  )
                  .join("")}
              </dl>
            </div>
          </div>
        </div>
        <!-- Tailwind CSS Feature Sections End -->
        <!-- Tailwind CSS Stats Start -->
        <div class="py-24 sm:py-32 bg-gray-900 relative isolate overflow-hidden">
          <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
          </div>
          <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
          </div>
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              ${data["stats"]["stats"]
                .map(
                  (item) => `
                    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt class="text-base leading-7 text-white">
                        ${item["value2"]}
                      </dt>
                      <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                        ${item["value1"]}
                      </dd>
                    </div>
                  `,
                )
                .join("")}
            </dl>
          </div>
        </div>
        <!-- Tailwind CSS Stats End -->
        <!-- Tailwind CSS Team Sections Start -->
        <div class="bg-white py-24 sm:py-32">
          <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div class="max-w-2xl">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">${
                data["team"]["title"]
              }</h2>
              <p class="mt-6 text-lg leading-8 text-gray-600">${
                data["team"]["subtitle"]
              }</p>
            </div>
            <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              ${data["team"]["team"]
                .map(
                  (item) => `
                    <li>
                      <div class="flex items-center gap-x-6">
                        <img class="h-16 w-16 rounded-full" src="${item["value1"]}" width="80"
                          height="80" alt="${item["value2"]} image">
                        <div>
                          <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                            ${item["value2"]}
                          </h3>
                          <p class="text-sm font-semibold leading-6 text-indigo-600">
                            ${item["value3"]}
                          </p>
                        </div>
                      </div>
                    </li>
                  `,
                )
                .join("")}
            </ul>
          </div>
        </div>
        <!-- Tailwind CSS Team Sections End -->
        <!-- Tailwind CSS Contact Sections Start -->
        <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
            <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
          </div>
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">${
              data["contact"]["title"]
            }</h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">${
              data["contact"]["subtitle"]
            }</p>
          </div>
          <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                <div class="mt-2.5">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
              </div>
              <div>
                <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                <div class="mt-2.5">
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company</label>
                <div class="mt-2.5">
                  <input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                <div class="mt-2.5">
                  <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                <div class="mt-2.5">
                  <textarea name="message" id="message" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
              </div>
            </div>
            <div class="mt-10">
              <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
            </div>
          </form>
        </div>
        <!-- Tailwind CSS Contact Sections End -->
        <footer class="relative isolate py-8 overflow-hidden bg-gray-900 text-white">
          <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
          </div>
          <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
          </div>
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
              <div>
                <a href="#">Privacy Policy</a>
              </div>
              <div class="text-right">
                <p>Copyright © 2024 | All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
      </html>
    `;

    zip.file("index.html", htmlContent);
    zip.file("styles.css", compiledCSS);

    if (fs.existsSync(assetsPath)) {
      addFolderToZip(zip, assetsPath, "assets");
    }

    const zipContent: Buffer = await zip.generateAsync({ type: "nodebuffer" });

    fs.unlinkSync(outputCSSPath);
    fs.unlinkSync(outputCSSPath + ".map");

    const headers = new Headers({
      "Content-Disposition": "attachment; filename=static-site.zip",
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
