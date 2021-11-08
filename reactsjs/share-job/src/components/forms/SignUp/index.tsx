import { FC, FormEvent, useState } from "react";
import { signup } from "./api";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  birthdate: "",
  sessionToken: "",
};

const SignUp: FC = () => {
  const [inputs, setInputs] = useState(defaultValues);

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    signup({ ...inputs, birthdate: new Date(inputs.birthdate) });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Nombre y apellido</label>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={(e) =>
            setInputs((prevState) => ({ ...prevState, email: e.target.value }))
          }
        />
      </div>
      <div>
        <label htmlFor="">Contraseña</label>
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="">Fecha de nacimiento</label>
        <input
          type="date"
          name="birthdate"
          value={inputs.birthdate}
          onChange={(e) => setInputs({ ...inputs, birthdate: e.target.value })}
        />
      </div>
      <button type="submit">Crear usuario</button>
    </form>
  );
};

export { SignUp };
