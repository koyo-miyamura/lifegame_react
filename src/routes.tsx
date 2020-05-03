import React, { FC, ReactElement } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Home from "./containers/Home";
import About from "./containers/About";
import Favorite from "./containers/Favorite";

export type Route = {
  contents: ReactElement;
  path: string;
  component: FC;
};

export const routes: Route[] = [
  {
    contents: React.createElement("span", null, "Home"),
    path: "/",
    component: Home,
  },
  {
    contents: React.createElement("span", null, "About"),
    path: "/about",
    component: About,
  },
  {
    contents: React.createElement(FavoriteIcon, null),
    path: "/favorite",
    component: Favorite,
  },
];
