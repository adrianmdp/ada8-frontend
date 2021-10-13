import { Route, Switch } from "react-router-dom";
import { Users } from "../../pages";

const RouterUsers = () => {
  return (
    <Switch>
      <Route path="/users/add" component={Users} />
      <Route path="/users" component={Users} />
    </Switch>
  );
};

export { RouterUsers };
