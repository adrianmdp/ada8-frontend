import { FC, FormEvent } from "react";
import { useForm } from "react-hook-form";
import { AddTaskType } from "../../../types";

type Props = {
  handleAddTask: (data: AddTaskType) => void;
};

const AddTasks: FC<Props> = ({ handleAddTask }) => {
  const { register, handleSubmit, formState } = useForm();

  const dondeNosotrosRealizamosLaOperacion = (data: AddTaskType) => {
    handleAddTask(data);
  };

  return (
    <form action="" onSubmit={handleSubmit(dondeNosotrosRealizamosLaOperacion)}>
      <div className="form-group">
        <label htmlFor="">Título</label>
        <input type="text" {...register("title")} />
      </div>

      <div className="form-group">
        <label htmlFor="">Fecha</label>
        <input type="text" {...register("date")} />
      </div>

      <div className="form-group">
        <label htmlFor="">Descripción</label>
        <textarea {...register("description")}></textarea>
      </div>

      <button className="btn btn-primary">Crear tarea</button>
    </form>
  );
};

export { AddTasks };
