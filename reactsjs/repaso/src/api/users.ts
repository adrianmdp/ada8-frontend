import { AddUserType, User } from "../types/models";
import { api } from "../utils";
import { mapToArray } from "../helpers";

const getUsers = async (): Promise<User[]> => {
  const response = await api.get("/users.json");
  return mapToArray(response.data);
};

const addUser = async (payload: AddUserType) => {
  await api.post("/users.json", payload);
};

export const usersApi = { getUsers, addUser };
