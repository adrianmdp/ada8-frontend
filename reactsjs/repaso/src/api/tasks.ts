import { AddTaskType, Task } from "../types/models";
import { api } from "../utils";
import { mapToArray } from "../helpers";

const getTasks = async (): Promise<Task[]> => {
  const response = await api.get("/tasks.json");
  return mapToArray(response.data);
};

const addTask = async (payload: AddTaskType) => {
  await api.post("/tasks.json", payload);
};

export const tasksApi = { getTasks, addTask };
