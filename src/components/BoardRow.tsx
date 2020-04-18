import React, { FC } from "react";
import Cell from "./Cell";

type BoardProps = {
  row: boolean[];
};

const Board: FC<BoardProps> = ({ row }) => {
  return (
    <>
      <div className="board-row">
        {row.map((cellState, i) => (
          <Cell key={String(i)} alive={cellState} />
        ))}
      </div>
    </>
  );
};

export default Board;
