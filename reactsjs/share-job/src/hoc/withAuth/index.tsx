import { FC } from "react";
import { useAuth } from "../../hooks/useAuth";

// Verficar si existe una sesión activa y en caso de no existir
// carga la pagina de Login.
// Si hay un usuario en sesión, entonces se carga el componente
// actual o, si vengo de login o signup, tengo que enviar a
// la pagina principal.

const isAuthenticated = true;

type withAuthenticationFn = (Component: FC) => FC;

const WithAuth: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (): JSX.Element | null => {
    const { login } = useAuth();

    // login("asd", "asd");

    return isAuthenticated ? <Component /> : null;
  };

  return Authenticated;
};

export { WithAuth };
