export type User = {
  id: string;
  email: string;
  password: string;
  name: string;
};

export type AddUserType = Omit<User, "id">;

export type Task = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export type AddTaskType = Omit<Task, "id">;

export type Store<T> = {
  [name: string]: {
    loading?: boolean;
    items?: T[];
    error?: string;
  };
};
