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
  color?: "primary" | "secondary";
};

const AppHeader: FC<AppHeaderProps> = ({ routes, color = "primary" }) => {
  const history = useHistory();

  return (
    <Box mb={4}>
      <AppBar position="static" color={color}>
        <Toolbar>
          <Grid container>
            <Grid item xs={2}>
              <Typography variant="h5" onClick={() => history.push("/")}>
                LifeGame
              </Typography>
            </Grid>
            <Grid container item xs justify="flex-end">
              {routes.map((route) => (
                <Button
                  key={route.path}
                  color="inherit"
                  onClick={() => history.push(route.path)}
                >
                  {route.contents}
                </Button>
              ))}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
