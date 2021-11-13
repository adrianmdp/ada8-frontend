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
import { Header } from "./components/layout";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/categories" component={Categories} />
          <Route path="/profile" component={Profile} />
          <Route path="/users/:pepe" component={DetailUser} />
          <Route path="/users" component={Users} />
          <Route path="/add-job-offer" component={AddJobOffer} />
          <Route path="/job-offers/:id" component={JobOffers} />
          <Route path="/" component={JobOffers} />
          localhost:3000/users/
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
