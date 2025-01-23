import axios from "axios";

export const fetchAllTemplates = async ({ queryKey }) => {
  try {
    const response = await axios.get("/api/allTemplates");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user templates: " + error.message);
  }
};
