import { Route, Switch } from "react-router";
import ErrorPage from "../Pages/404page";
import LandPage from "../Pages/LandPage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};
