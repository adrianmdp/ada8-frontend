import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "0bce2b3619ac231ad6ce364b6d8015ab",
  },
});

export { api };
