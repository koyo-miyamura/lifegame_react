import React, { FC } from "react";
import Cell from "./Cell";

type BoardProps = {
  cellStates?: boolean[][];
};

const defaultState: boolean[][] = [
  [true, true, true],
  [true, false, true],
  [true, true, true],
];

const Board: FC<BoardProps> = ({ cellStates = defaultState }) => {
  return (
    <>
      {cellStates.map((rows, i) => (
        <div key={String(i)} className="board-row">
          {rows.map((columnState, j) => (
            <Cell key={String(i + j)} alive={columnState} />
          ))}
        </div>
      ))}
    </>
  );
};

export default Board;
