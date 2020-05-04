import React, { FC } from "react";
import LifeGame from "./LifeGame";
import { useQueryCells } from "../lib/useQueryCells";
import { defaultCells } from "../lib/cells";
import Game from "../lib/lifegame";

const Home: FC<{}> = () => {
  const queryCells = useQueryCells();

  return (
    <>
      <LifeGame
        defaultCells={Game.colLength(queryCells) ? queryCells : defaultCells}
      />
    </>
  );
};

export default Home;
