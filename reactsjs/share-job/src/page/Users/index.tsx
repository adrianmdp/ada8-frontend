import { useState } from "react";
import { getUsers } from "../../api";
import { User } from "../../components/common/User";
import { WithAuth } from "../../hoc/withAuth";
import { User as UserType } from "../../types";

const UsersPage = () => {
  const [users, setUsers] = useState<UserType[] | undefined>();

  const obtenerUsuarios = async () => {
    const response = await getUsers();
    setUsers(response);
  };

  if (!users) {
    obtenerUsuarios();
  }
  return (
    <>
      <div className="row">
        {users?.map((user) => {
          return (
            <div className="col-md-4">
              <User user={user} />
            </div>
          );
        })}
      </div>
      Users
    </>
  );
};

export const Users = WithAuth(UsersPage);
