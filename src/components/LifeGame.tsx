import React, { FC, useState, useEffect, useMemo } from "react";
import Board from "./Board";

const defaultCells: boolean[][] = [
  [true, true, true],
  [true, false, true],
  [true, true, true],
];

const nextCells = (cells: boolean[][]): boolean[][] => {
  return cells.map((row) => row.map((alive) => !alive));
};

const LifeGame: FC<{}> = () => {
  const [cells, setCells] = useState(defaultCells);
  useMemo(() => cells, [cells]);

  useEffect(() => {
    const id = setInterval(() => {
      const afterCells = nextCells(cells);
      setCells(afterCells);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [cells]);

  return (
    <>
      <Board rows={cells} />
    </>
  );
};

export default LifeGame;
