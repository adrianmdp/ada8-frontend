import { createContext, FC, useState } from "react";
import { User } from "../../types";

type Context = {
  users?: User[];
  updateUsers: (users: User[]) => void;
};

const UsersContext = createContext<Context>({
  users: undefined,
  updateUsers: () => {},
});

const UsersProvider: FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>();

  const updateUsers = (users: User[]) => {
    setUsers(users);
  };

  return (
    <UsersContext.Provider value={{ users, updateUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
