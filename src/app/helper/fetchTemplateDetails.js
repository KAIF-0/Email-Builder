import axios from "axios";
import { templates } from "./template";

export const fetchTemplateDetails = async ({ queryKey }) => {
  try {
    const [key, templateId, isUserTemplate] = queryKey;
    console.log(isUserTemplate);
    const endpoint = isUserTemplate
      ? "/api/userTemplateDetails"
      : "/api/templateDetails";
    const response = await axios.get(`${endpoint}/${templateId}`);
    // const response = await axios.post(`/api/saveAllTemplates`, {
    //     templates
    // });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user templates: " + error.message);
  }
};
