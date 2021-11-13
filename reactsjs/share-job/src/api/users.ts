import { User } from "../types";
import { api } from "../utils";

const mapToArray = (object: any) => {
  const array = [];

  for (const elem in object) {
    array.push({
      id: elem,
      ...object[elem],
    });
  }

  return array;
};

const getUsers = async (): Promise<User[]> => {
  const response = await api.get("/users.json");
  return mapToArray(response.data);
};

const getUser = async (id: string): Promise<User> => {
  const response = await api.get<User>(`/users/${id}.json`);
  return response.data;
};

export { getUsers, getUser };
