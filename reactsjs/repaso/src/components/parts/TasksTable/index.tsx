import { FC } from "react";
import { Task } from "../../../types";

type Props = {
  data: Task[];
};

const TasksTable: FC<Props> = ({ data }) => {
  return (
    <table>
      <thead>
        <th>ID</th>
        <th>Título</th>
        <th>Descripción</th>
        <th>Fecha</th>
      </thead>
      <tbody>
        {data?.map((task) => (
          <tr>
            <td>{task.id}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { TasksTable };
