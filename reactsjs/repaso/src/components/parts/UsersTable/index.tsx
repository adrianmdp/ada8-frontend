import { FC, useContext, useEffect } from "react";
import { UsersContext } from "../../../contexts";
import { useUsers } from "../../../hooks";

const UsersTable: FC = () => {
  const { users, isLoading } = useUsers();

  return (
    <>
      {isLoading ? (
        "Cargando..."
      ) : (
        <table>
          <thead>
            <th>ID</th>
            <th>Email</th>
            <th>Password</th>
            <th>Nombre</th>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export { UsersTable };
