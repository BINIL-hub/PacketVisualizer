import axios from "axios";

const API_BASE = "http://127.0.0.1:8000";

export const uploadPacketFile = async (file: File): Promise<any> => {
  const formData = new FormData();
  formData.append("file", file);

  // If you still have protocol query for now:
  // const response = await axios.post(`${API_BASE}/upload/?protocol=PVS`, formData);

  // Later, for automatic detection:
  const response = await axios.post(`${API_BASE}/auto-upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};
