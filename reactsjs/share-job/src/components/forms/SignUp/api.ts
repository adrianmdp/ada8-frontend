import { User } from "../../../types";
import { api } from "../../../utils";

type Payload = Omit<User, "id" /* | 'name' | 'passeord' */>;

const signup = async (payload: Payload) => {
  try {
    const response = await api.post("/users.json", payload);
  } catch (e) {
    // console.log(e);
  }
};

export { signup };
