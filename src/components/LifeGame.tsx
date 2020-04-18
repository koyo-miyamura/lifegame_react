import React, { FC, useState, useEffect, useMemo } from "react";
import Board from "./Board";

const defaultCells: boolean[][] = [
  [true, true, true],
  [true, false, true],
  [true, true, true],
];

const LifeGame: FC<{}> = () => {
  const [cells, setCells] = useState(defaultCells);
  useMemo(() => cells, [cells]);

  useEffect(() => {
    const afterCells = [...defaultCells];
    afterCells[0][0] = false;
    const id = setTimeout(() => {
      setCells(afterCells);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <>
      <Board rows={cells} />
    </>
  );
};

export default LifeGame;
