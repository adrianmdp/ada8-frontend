import { useContext } from "react";
import { usersApi } from "../../api";
import { UsersContext } from "../../contexts";
import { AddUserType } from "../../types/models";

const useUsers = () => {
  const { updateUsers } = useContext(UsersContext);

  const addUser = async (datos: AddUserType) => {
    await usersApi.addUser(datos);
    getUsers();
  };

  const getUsers = async () => {
    const response = await usersApi.getUsers();
    updateUsers(response);
  };

  const getUser = (id: string) => {};

  return { addUser, getUsers, getUser };
};

export { useUsers };
