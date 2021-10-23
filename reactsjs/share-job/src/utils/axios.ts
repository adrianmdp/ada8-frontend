import axios from "axios";

const api = axios.create({
  baseURL: "https://todoapp--default-rtdb.firebaseio.com",
  params: {
    ejemplo: "valor-ejemplo",
  },
});

export { api };
