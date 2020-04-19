import { FC } from "react";
import Home from "./containers/Home";
import About from "./containers/About";

export type Route = {
  name: string;
  path: string;
  component: FC;
};

export const routes: Route[] = [
  { name: "Home", path: "/", component: Home },
  { name: "About", path: "/about", component: About },
];
