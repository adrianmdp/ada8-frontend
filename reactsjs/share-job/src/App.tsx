import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Categories,
  JobOffers,
  Login,
  Profile,
  SignUp,
  Users,
  AddJobOffer,
  DetailUser,
} from "./page";

import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts";
import { useAuth } from "./hooks";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/categories" component={Categories} />
          <Route path="/profile" component={Profile} />
          <Route path="/users/:slug" component={DetailUser} />
          <Route path="/users" component={Users} />
          <Route path="/add-job-offer" component={AddJobOffer} />
          <Route path="/" component={JobOffers} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
