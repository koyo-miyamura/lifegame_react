import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline, Container } from "@material-ui/core";
import { routes } from "../routes";
import AppHeader from "./AppHeader";

const App: FC<{}> = () => {
  return (
    <Router>
      <CssBaseline />
      <AppHeader routes={routes} />

      <Container>
        <Switch>
          {routes.map((route) => (
            <Route
              exact
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
