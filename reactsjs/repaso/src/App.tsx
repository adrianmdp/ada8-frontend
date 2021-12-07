import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UsersProvider } from "./contexts";
import { Dashboard, Tasks, Users } from "./Pages";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <UsersProvider>
        <Router>
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Router>
      </UsersProvider>
    </Provider>
  );
};

export default App;
