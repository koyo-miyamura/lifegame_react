import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CssBaseline, Container } from "@material-ui/core";
import { routes } from "../routes";

const App: FC<{}> = () => {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="sm">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

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
