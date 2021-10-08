import { api } from "../../../utils";

type Payload = {
  email: string;
  password: string;
  name: string;
  gender: string;
};

const signup = async (data: Payload) => {
  await api.post("/users.json", data);
};

export { signup };
