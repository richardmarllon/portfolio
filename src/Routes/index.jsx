import { Route, Switch } from "react-router";
import ErrorPage from "../Pages/404page";
import Home from "../Pages/Home";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};
