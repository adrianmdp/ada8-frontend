import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts";
import { mapToArray } from "../../helpers";
import { User } from "../../types";
import { api } from "../../utils";

const useAuth = () => {
  const [tokenStorage, setTokenStorage] = useState<string | undefined>(
    localStorage.getItem("share-job-token") || undefined
  );

  const [hasUserLoggedIn, setHasUserLoggedIn] = useState<boolean>();

  const { setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    if (tokenStorage) localStorage.setItem("share-job-token", tokenStorage);
  }, [tokenStorage]);

  useEffect(() => {
    loginWithToken();
  }, []);

  /**
   *
   * @param user
   */
  const createUserToken = async (user: User): Promise<string | null> => {
    const newToken = Math.random().toString(36).substr(2);

    try {
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
          setTokenStorage(token);
          setCurrentUser(user);
          setHasUserLoggedIn(true);
        } else {
          setHasUserLoggedIn(false);
        }
      } else {
        throw new Error("El usuario no existe");
      }
      /* / Tarea de backend */
    } catch (e) {
      console.log(e);
    }
  };

  const loginWithToken = async () => {
    let user;
    try {
      const response = await api.get("/users.json");

      /* Tarea de backend */
      const users: User[] = mapToArray(response.data);

      if (tokenStorage) {
        user = users.find((user) => user.sessionToken === tokenStorage);
      }

      console.log(user);

      if (user) {
        setCurrentUser(user);
        setHasUserLoggedIn(true);
      } else {
        setHasUserLoggedIn(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {};

  const signUp = () => {};

  return { login, loginWithToken, logout, signUp, hasUserLoggedIn };
};

export { useAuth };
