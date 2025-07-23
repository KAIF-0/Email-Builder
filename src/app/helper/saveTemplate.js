import axios from "axios";
// import { templates } from "./template";

export const saveTemplate = async (data) => {
  try {
    const { template, isUserTemplate } = data;
    console.log(template, isUserTemplate);
    const endpoint = isUserTemplate
      ? "/api/updateUserTemplate"
      : "/api/saveUserTemplate";
    const response = await axios.post(endpoint, template);
    return response.data;
  } catch (error) {
    throw new Error("Failed to save template: " + error.message);
  }
};
