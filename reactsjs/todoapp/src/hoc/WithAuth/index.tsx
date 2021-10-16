import { FC } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks";

const isAuthenticated = true;

type withAuthenticationFn = (Component: FC) => FC;

const WithAuth: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (): JSX.Element | null => {
    const { push } = useHistory();
    const { userSession } = useAuth();

    // if (!userSession) {
    //   push("/login");
    // }

    return isAuthenticated ? <Component /> : null;
  };

  return Authenticated;
};

export { WithAuth };
