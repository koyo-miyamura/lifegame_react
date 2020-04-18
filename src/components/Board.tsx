import React, { FC } from "react";
import BoardRow from "./BoardRow";

type BoardProps = {
  rows: boolean[][];
};

const Board: FC<BoardProps> = ({ rows }) => {
  return (
    <>
      {rows.map((row, i) => (
        <BoardRow key={String(i)} row={row} />
      ))}
    </>
  );
};

export default Board;
