import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { defaultValues } from "./defaultValues";
import { validationSchema } from "./validationschema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUsers } from "../../../hooks";
import { AddUserType } from "../../../types/models";

const AddUsers: FC = () => {
  const { addUser } = useUsers();

  const { handleSubmit, register, formState } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: AddUserType) => {
    addUser(data);
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="">email</label>
        <input type="email" {...register("email")} />
        <span className="text-danger">{formState.errors.email?.message}</span>
      </div>

      <div className="form-group">
        <label htmlFor="">password</label>
        <input type="password" {...register("password")} />
        <span className="text-danger">
          {formState.errors.password?.message}
        </span>
      </div>

      <div className="form-group">
        <label htmlFor="">nombre</label>
        <input type="text" {...register("name")} />
        <span className="text-danger">{formState.errors.name?.message}</span>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export { AddUsers };
