import React, { FC } from "react";
import Cell from "./Cell";

type BoardProps = {
  row: boolean[];
  onClick?: (i: number) => void;
};

const Board: FC<BoardProps> = ({ row, onClick = () => undefined }) => {
  return (
    <>
      <div className="board-row">
        {row.map((cellState, i) => (
          <Cell key={String(i)} alive={cellState} onClick={() => onClick(i)} />
        ))}
      </div>
    </>
  );
};

export default Board;
