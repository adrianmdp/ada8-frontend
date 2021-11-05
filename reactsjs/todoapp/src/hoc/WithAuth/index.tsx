import { FC } from "react";

const isAuthenticated = true;

type withAuthenticationFn = (Component: FC) => FC;

const WithAuth: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (): JSX.Element | null => {
    // if (!userSession) {
    //   push("/login");
    // }

    return isAuthenticated ? <Component /> : null;
  };

  return Authenticated;
};

export { WithAuth };
