import React, { FC, CSSProperties } from "react";

type CellProps = {
  alive?: boolean;
  onClick?: () => void;
};

const Cell: FC<CellProps> = ({ alive = false, onClick = () => undefined }) => {
  const style: CSSProperties = {
    background: alive ? "#000" : "#FFF",
  };

  return (
    <button
      aria-label="cell"
      type="button"
      className="square"
      style={style}
      onClick={onClick}
    />
  );
};

export default Cell;
