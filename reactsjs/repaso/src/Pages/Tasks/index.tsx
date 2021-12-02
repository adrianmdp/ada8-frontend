import { FC, useState } from "react";
import { AddTasks } from "../../components/forms";
import { TasksTable } from "../../components/parts";
import { useTasks } from "../../hooks/useTasks";
import { AddTaskType, Task } from "../../types";

const Tasks: FC = () => {
  const { tasks, addTask } = useTasks();

  const handleAddTask = (data: AddTaskType) => {
    addTask(data);
  };

  return (
    <>
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <TasksTable data={tasks} />
            </div>
            <div className="col-md-6">
              <AddTasks handleAddTask={handleAddTask} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Tasks };
