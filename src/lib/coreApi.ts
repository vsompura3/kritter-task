import axios from "axios";

const coreApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY_ACCESS_TOKEN}`,
  },
});

export default coreApi;
