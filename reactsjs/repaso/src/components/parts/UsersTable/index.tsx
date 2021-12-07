import { FC } from "react";
import { useUsers } from "../../../hooks";
import { Store, User } from "../../../types";

const UsersTable: FC = () => {
  const { users } = useUsers();

  return (
    <table>
      <thead>
        <th>ID</th>
        <th>Email</th>
        <th>Password</th>
        <th>Nombre</th>
      </thead>
      <tbody>
        {users?.items?.map((user: User) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.name}</td>
          </tr>
        ))}
        {users.loading && (
          <tr>
            <td colSpan={4}>Cargando usuario</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export { UsersTable };
