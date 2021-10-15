import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard, SignUp, Tasks, Users } from "./pages";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/users" component={Users} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
