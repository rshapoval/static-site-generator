import { PageData } from "@/interfaces/page";

export const savePage = async (data: PageData) => {
  try {
    const response = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      // setMessage(result.message || "Page data saved successfully.");
    } else {
      const error = await response.json();
      // setMessage(error.message || "Failed to save page data.");
    }
  } catch (err) {
    console.error("Error saving page data:", err);
    // setMessage("Unexpected error occurred while saving data.");
  }
};

export const fetchData = async (setData: (newData: PageData) => void) => {
  try {
    const response = await fetch("/api/data", { method: "GET" });
    if (response.ok) {
      const result = await response.json();
      setData(result.data);
    } else {
      console.error("Error fetching data:", await response.json());
    }
  } catch (error) {
    console.error("Unexpected error fetching data:", error);
  }
};
