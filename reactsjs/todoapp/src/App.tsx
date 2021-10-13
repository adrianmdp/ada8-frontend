import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Layout } from "./components";
import { Dashboard, SignUp, Users, Tasks } from "./pages";
import { Login } from "./pages/Login";
import { RouterUsers } from "./routers/users";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/sign-up">Registro</Link>
            </li>
            <li>
              <Link className="" to="/users">
                Usuarios
              </Link>
            </li>
            <li>
              <Link to="/dashboard">Tablero</Link>
            </li>
            <li>
              <Link to="/tasks">Tareas</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={RouterUsers} />
          <Route path="/add-users" component={Users} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
