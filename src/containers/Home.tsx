import React, { FC } from "react";
import Cell from "../components/Cell";

const Home: FC<{}> = () => {
  return (
    <>
      <div className="board-row">
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div className="board-row">
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div className="board-row">
        <Cell />
        <Cell />
        <Cell />
      </div>
    </>
  );
};

export default Home;
