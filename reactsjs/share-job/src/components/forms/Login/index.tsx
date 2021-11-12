import { FC, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../hooks";

const defaultValues = {
  email: "",
  password: "",
};

type Props = {
  id?: string;
  className?: string;
};

const Login: FC<Props> = ({ id, className }) => {
  // Intentar resolver esto en la pagina y no en este componente.
  // Recordar a Adrián de ver como resolverlo.

  const [inputs, setInputs] = useState(defaultValues);
  const [alert] = useState<string | unknown>();

  const { push } = useHistory();
  const { login } = useAuth();

  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      await login(inputs.email, inputs.password);
    } catch (e) {
      // setAlert(e.message);
    }
  };

  return (
    <form id={id} className={className} action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="">Contraseña</label>
        <input
          type="password"
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
      </div>

      <button type="submit">Iniciar sesión</button>
      {alert}
    </form>
  );
};

export { Login };
