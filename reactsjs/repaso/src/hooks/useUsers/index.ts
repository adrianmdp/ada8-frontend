import { useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { usersApi } from "../../api";
import { QUERY_KEYS } from "../../constants";
import { UsersContext } from "../../contexts";

const useUsers = () => {
  const queryClient = useQueryClient();

  const { updateUsers, users } = useContext(UsersContext);

  const { isLoading } = useQuery(QUERY_KEYS.USERS, usersApi.getUsers, {
    onSuccess: (data) => {
      updateUsers(data);
    },
  });

  const { mutateAsync: addUser } = useMutation(usersApi.addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.USERS);
    },
  });

  // const { mutateAsync: removeUser } = useMutation(usersApi.removeUser, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(QUERY_KEYS.USERS);
  //   },
  // });

  const getUser = (id: string) => {};

  return { getUser, addUser, /* remove, */ users, isLoading };
};

export { useUsers };
