import { FC, FormEvent, useState } from "react";
import { signup } from "./api";

const SignUp: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    signup({ email, password, name, gender });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div>
          <select
            name="gender"
            id="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
            required
          >
            <option value="" disabled selected>
              Seleccionar
            </option>
            <option value="mujer">Mujer</option>
            <option value="hombre">Hombre</option>
          </select>
        </div>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export { SignUp };
