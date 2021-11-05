import { FC } from "react";
import { Login as LoginForm } from "../../components/forms";

const Login: FC = () => {
  return (
    <>
      <LoginForm id="login-form" className="form" />
    </>
  );
};

export { Login };
