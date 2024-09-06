import axios from "axios";


const apiClient = axios.create({
  baseURL: "http://localhost:8181/api/",
  headers: {
    'Content-type': 'Application/json',
  },
});

export default apiClient;
