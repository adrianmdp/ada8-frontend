import { useState } from "react";
import { tasksApi } from "../../api/tasks";
import { AddTaskType, Task } from "../../types";

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = async (datos: AddTaskType) => {
    await tasksApi.addTask(datos);
    getTasks();
  };

  const getTasks = async () => {
    const response = await tasksApi.getTasks();
    setTasks(response);
  };

  const getTask = (id: string) => {};

  return { tasks, addTask, getTasks, getTask };
};

export { useTasks };
