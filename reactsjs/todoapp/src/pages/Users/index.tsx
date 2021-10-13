import { useState } from "react";
import { getUsers } from "../../api";
import { Layout } from "../../components";
import { User } from "../../types";

const Users = () => {
  const [users, setUsers] = useState<User[] | undefined>();

  const obtenerUsuarios = async () => {
    const response = await getUsers();
    setUsers(response);
  };

  if (!users) {
    obtenerUsuarios();
  }

  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.pass}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
};

export { Users };
