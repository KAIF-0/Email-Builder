import axios from 'axios';

export const fetchUserTemplates = async ({queryKey}) => {
  try {
    const [userId] = queryKey;
    const response = await axios.get("/api/allUserTemplates");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user templates: " + error.message);
  }
};


