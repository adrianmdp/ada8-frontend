import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts";
import { mapToArray } from "../../helpers";
import { User } from "../../types";
import { api } from "../../utils";

const useAuth = () => {
  const [storage, setStorage] = useState<string>();

  const { setCurrentUser } = useContext(AuthContext);

  /**
   *
   * @param user
   */
  const createUserToken = async (user: User): Promise<string | null> => {
    try {
      const newToken = Math.random().toString(36).substr(2);
      await api.patch(`/users/${user.id}.json`, { sessionToken: newToken });
      return newToken;
    } catch (err) {
      return null;
    }
  };

  /**
   *
   * @param user
   * @param pass
   * @returns
   */
  const login = async (email: string, password: string) => {
    try {
      const response = await api.get("/users.json");

      /* Tarea de backend */
      const users: User[] = mapToArray(response.data);

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // Definir un token
        const token = await createUserToken(user);

        if (token) {
          setStorage(token);
          setCurrentUser(user);
        }
      } else {
        throw new Error("El usuario no existe");
      }
      /* / Tarea de backend */
    } catch (e) {
      console.log(e);
    }
  };

  const loginWithToken = () => {};

  const logout = () => {};

  const signUp = () => {};

  return { login, loginWithToken, logout, signUp };
};

export { useAuth };
