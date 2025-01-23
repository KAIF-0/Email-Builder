import axios from "axios";
// import { templates } from "./template";

export const saveTemplate = async (templateData) => {
  try {
    console.log(templateData);
    const response = await axios.post("/api/saveTemplate", templateData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to save template: " + error.message);
  }
};
