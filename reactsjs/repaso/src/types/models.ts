export type User = {
  id: string;
  email: string;
  password: string;
  name: string;
};

export type AddUserType = Omit<User, "id">;
