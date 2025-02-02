export const exportToZip = async () => {
  try {
    const response = await fetch("/api/export", { method: "POST" });

    if (!response.ok) {
      throw new Error("Error creating archive");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "static-site.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Export error:", error);
  }
};
