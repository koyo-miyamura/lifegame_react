import React, { FC, CSSProperties } from "react";

type CellProps = {
  alive?: boolean;
};

const Cell: FC<CellProps> = ({ alive = false }) => {
  const style: CSSProperties = {
    background: alive ? "#000" : "#FFF",
  };

  return (
    <button aria-label="cell" type="button" className="square" style={style} />
  );
};

export default Cell;
