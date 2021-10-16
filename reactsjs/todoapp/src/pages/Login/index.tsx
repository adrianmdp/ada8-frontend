import { EventHandler, FC, FormEvent, useEffect, useState } from "react";
import { Layout } from "../../components";
import { WithAuth } from "../../hoc";
import { useAuth } from "../../hooks";

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { login, userSession } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(email, pass);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(userSession));
  // }, [userSession]);

  if (userSession) {
    localStorage.setItem("user", JSON.stringify(userSession));
  }

  return (
    <Layout mainClass="login" hideHeader hideFooter>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="pass">Contraseña</label>
          <input
            id="pass"
            type="password"
            name="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <button type="submit">Inciar sesión</button>
      </form>
    </Layout>
  );
};

export const LoginPage = WithAuth(Login);
