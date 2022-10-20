import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

axiosClient.interceptors.response.use(
  (resp) => resp.data || resp,
  (err) => Promise.reject(err)
);

export { axiosClient };
