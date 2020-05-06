import React, { FC, Dispatch } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline, Container } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { routes } from "../routes";
import AppHeader from "./AppHeader";
import { closeToast } from "../actions/system";
import Toast from "../components/Toast";
import { RootAction } from "../actions";

const App: FC<{}> = () => {
  const isToastOpen = useSelector(
    (state: RootState) => state.System.isToastOpen
  );
  const toastMessage = useSelector(
    (state: RootState) => state.System.toastMessage
  );

  const dispatch: Dispatch<RootAction> = useDispatch();
  const handleCloseToast = () => {
    dispatch(closeToast());
  };

  return (
    <Router>
      <CssBaseline />
      <AppHeader routes={routes} />
      <Container>
        <Toast
          isOpen={isToastOpen}
          message={toastMessage}
          onClose={handleCloseToast}
        />
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
