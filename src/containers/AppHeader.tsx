import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
} from "@material-ui/core";
import { Route } from "../routes";

type AppHeaderProps = {
  routes: Route[];
};

const AppHeader: FC<AppHeaderProps> = ({ routes }) => {
  const history = useHistory();

  return (
    <Box mb={4}>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Typography variant="h5" onClick={() => history.push("/")}>
              Life Game
            </Typography>
          </Grid>
          <Grid container justify="flex-end">
            {routes.map((route) => (
              <Button
                key={route.name}
                color="inherit"
                onClick={() => history.push(route.path)}
              >
                {route.name}
              </Button>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
