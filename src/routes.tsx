import { FC } from "react";
import Home from "./containers/Home";
import About from "./containers/About";

type Route = {
  path: string;
  component: FC;
};

export const routes: Route[] = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];
