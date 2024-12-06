import { PageData } from "@/interfaces/page";

export const savePage = async (data: PageData) => {
  try {
    const response = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to save page data.");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error saving page data:", error);
    throw error;
  }
};

export const fetchData = async (setData: (newData: PageData) => void) => {
  try {
    const response = await fetch("/api/data", { method: "GET" });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to fetch data.");
    }

    const result = await response.json();
    setData(result.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
