import { FC } from "react";
import { SignUp as SignUpForm } from "../../components/forms";
import { WithAuth } from "../../hoc";

const SignUpPage: FC = () => {
  return <SignUpForm />;
};

export const SignUp = WithAuth(SignUpPage);
