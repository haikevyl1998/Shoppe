import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api-placeholder.vercel.app/api",
});

axiosClient.interceptors.response.use(
  (resp) => resp.data || resp,
  (err) => Promise.reject(err)
);

export { axiosClient };
