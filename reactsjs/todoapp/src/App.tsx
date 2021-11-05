import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard, SignUp, Tasks, Users, Login } from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/recovery-password" component={SignUp} />

        <Route path="/users" component={Users} />
        <Route path="/profile" component={Users} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
