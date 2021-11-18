import { FC, FormEvent, useState } from "react";
import { useAuth } from "../../../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validation-schema";
import { defaultValues } from "./default-values";

type Props = {
  id?: string;
  className?: string;
};

const Login: FC<Props> = ({ id, className }) => {
  // Intentar resolver esto en la pagina y no en este componente.
  // Recordar a Adrián de ver como resolverlo.

  const [inputs, setInputs] = useState(defaultValues);
  const [alert] = useState<string | unknown>();

  const { login } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string; password: string }>({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      await login(data.email, data.password);
    } catch (e) {
      // setAlert(e.message);
    }
  };

  return (
    <form
      id={id}
      className={className}
      action=""
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor="">Email</label>
        <input
          type="text"
          // value={inputs.email}
          // onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          {...register("email")}
        />
        {errors.email?.message}
      </div>
      <div>
        <label htmlFor="">Contraseña</label>
        <input
          type="password"
          // value={inputs.password}
          // onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          {...register("password")}
        />
        {errors.password?.message}
      </div>

      <button type="submit">Iniciar sesión</button>
      {alert}
    </form>
  );
};

export { Login };
