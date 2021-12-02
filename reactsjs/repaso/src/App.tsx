import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UsersProvider } from "./contexts";
import { Dashboard, Tasks, Users } from "./Pages";

const App = () => {
  return (
    <UsersProvider>
      <Router>
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </UsersProvider>
  );
};

export default App;
