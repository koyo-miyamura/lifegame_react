import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
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
          <IconButton edge="start" color="inherit" aria-label="menu" />
          <Typography variant="h5">Life Game</Typography>
          {routes.map((route) => (
            <Button
              key={route.name}
              color="inherit"
              onClick={() => history.push(route.path)}
            >
              {route.name}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
