import React, { FC, useState, useEffect } from "react";
import Board from "./Board";

const aliveCellNum = (cells: boolean[][], i: number, j: number): number => {
  const aroundCells = [
    cells[i - 1] ? cells[i - 1][j - 1] : false,
    cells[i - 1] ? cells[i - 1][j] : false,
    cells[i - 1] ? cells[i - 1][j + 1] : false,
    cells[i] ? cells[i][j - 1] : false,
    cells[i] ? cells[i][j + 1] : false,
    cells[i + 1] ? cells[i + 1][j - 1] : false,
    cells[i + 1] ? cells[i + 1][j] : false,
    cells[i + 1] ? cells[i + 1][j + 1] : false,
  ];

  return aroundCells.filter((v) => v).length;
};

const isAlive = (
  alive: boolean,
  cells: boolean[][],
  i: number,
  j: number
): boolean => {
  switch (aliveCellNum(cells, i, j)) {
    case 0:
    case 1:
      return false;
    case 2:
      return alive;
    case 3:
      return true;
    default:
      return false;
  }
};

const nextCells = (cells: boolean[][]): boolean[][] => {
  return cells.map((row, i) =>
    row.map((alive, j) => isAlive(alive, cells, i, j))
  );
};

const defaultCells: boolean[][] = [
  [false, true, false],
  [false, true, false],
  [false, true, false],
];

const tickMs = 300;
const LifeGame: FC<{}> = () => {
  const [cells, setCells] = useState(defaultCells);

  useEffect(() => {
    const id = setInterval(() => {
      setCells(nextCells(cells));
    }, tickMs);

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
