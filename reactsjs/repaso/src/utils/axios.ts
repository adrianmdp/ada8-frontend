import axios from "axios";

const api = axios.create({
  baseURL: "https://todoapp-c3a11-default-rtdb.firebaseio.co",
});

export { api };
