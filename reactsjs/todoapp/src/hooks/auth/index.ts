import { FormEvent, useState } from "react";
import { getUsers } from "../../api";
import { User } from "../../types";

const useAuth = () => {
  const [userSession, setUserSession] = useState<User>(
    JSON.parse(localStorage.getItem("user")!)
  );

  const login = async (user: string, password: string) => {
    const users = await getUsers();

    const userLogged = users.find((u) => {
      if (u.email === user && u.pass === password) {
        return true;
      }
      return false;
    });

    console.log(userLogged);

    if (userLogged) {
      setUserSession({ ...userLogged, pass: null });
    }
  };

  const logout = () => {};

  const recoveryPassword = () => {};

  return { login, userSession };
};

export { useAuth };
