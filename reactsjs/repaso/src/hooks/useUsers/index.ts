import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UsersContext } from "../../contexts";
import { getUsersAction } from "../../redux/actions";
import { addUserAction } from "../../redux/actions";
import { AddUserType, Store, Task, User } from "../../types";

const useUsers = () => {
  const { updateUsers } = useContext(UsersContext);

  const dispatch = useDispatch();

  const users = useSelector((state: Store<User>) => state.users);

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  const addUser = async (datos: AddUserType) => {
    await dispatch(addUserAction(datos));
    getUsers();
  };

  const getUsers = async () => {
    dispatch(getUsersAction());
  };

  const getUser = (id: string) => {};

  return { users, addUser, getUsers, getUser };
};

export { useUsers };
