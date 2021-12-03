import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UsersProvider } from "./contexts";
import { Dashboard, Tasks, Users } from "./Pages";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersProvider>
        <Router>
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Router>
      </UsersProvider>
    </QueryClientProvider>
  );
};

export default App;
