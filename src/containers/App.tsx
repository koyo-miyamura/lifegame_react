import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { routes } from "../routes";
import { CssBaseline, Container } from "@material-ui/core";

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
          {routes.map((route, key) => (
            <Route exact key={key} path={route.path} component={route.component} />
          ))}
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
