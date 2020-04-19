import React, { FC } from "react";
import BoardRow from "./BoardRow";

type BoardProps = {
  rows: boolean[][];
  onClick?: (i: number, j: number) => void;
};

const Board: FC<BoardProps> = ({ rows, onClick = () => undefined }) => {
  return (
    <>
      {rows.map((row, i) => (
        <BoardRow key={String(i)} row={row} onClick={(j) => onClick(i, j)} />
      ))}
    </>
  );
};

export default Board;
