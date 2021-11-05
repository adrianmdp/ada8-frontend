import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { User } from "../../types";

type ContextType = {
  currentUser?: Partial<User>
  cambiarAdmin: (newUser: User) => void
};

const AuthContext = createContext<ContextType>({
  currentUser: {},
  cambiarAdmin: () => null
});

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<Partial<User>>();

  const cambiarAdmin = (newUser: User) => {
    setCurrentUser(newUser)
  }

  return (
    <>
      <AuthContext.Provider value={{ currentUser, cambiarAdmin }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export { AuthProvider, AuthContext };
