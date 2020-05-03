import React, { FC } from "react";
import LifeGame from "./LifeGame";
import { useQueryCells } from "../lib/useQueryCells";

const Home: FC<{}> = () => {
  const defaultCells = useQueryCells();

  return (
    <>
      <LifeGame defaultCells={defaultCells} />
    </>
  );
};

export default Home;
