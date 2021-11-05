import { FC, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "./api";

const defaultValues = {
  email: "",
  password: "",
};

type Props = {
  id?: string;
  className?: string;
};

const Login: FC<Props> = ({ id, className }) => {
  const [inputs, setInputs] = useState(defaultValues);
  const [alert] = useState<string | unknown>();

  const { push } = useHistory();

  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      const response = await login(inputs);
      localStorage.setItem("user", JSON.stringify(response));
      push("/");
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
