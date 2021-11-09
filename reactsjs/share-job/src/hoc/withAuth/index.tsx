import { FC, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts";
import { useAuth } from "../../hooks/useAuth";
import { Login } from "../../page";

// Verficar si existe una sesión activa y en caso de no existir
// carga la pagina de Login.
// Si hay un usuario en sesión, entonces se carga el componente
// actual o, si vengo de login o signup, tengo que enviar a
// la pagina principal.

const publicRoutes = ["/login", "/sign-up"];

type withAuthenticationFn = (Component: FC) => FC;

const WithAuth: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (): JSX.Element | null => {
    const { push, location } = useHistory();

    const { hasUserLoggedIn } = useAuth();

    console.log(hasUserLoggedIn);

    useEffect(() => {
      if (hasUserLoggedIn !== undefined) {
        if (hasUserLoggedIn === false) push("/login");
      }
    }, [hasUserLoggedIn]);

    return publicRoutes.includes(location.pathname) ? <Login /> : <Component />;
  };

  return Authenticated;
};

export { WithAuth };
