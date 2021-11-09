import { FC } from "react";
import { Link } from "react-router-dom";
import { Login as LoginForm } from "../../components/forms";
import { WithAuth } from "../../hoc";

const LoginPage: FC = () => {
  return (
    <>
      <LoginForm id="login-form" className="form" />
      <Link to="/">Ir a JobOffers</Link>
    </>
  );
};

export const Login = WithAuth(LoginPage);
