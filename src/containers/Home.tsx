import React, { FC } from "react";
import Cell from "../components/Cell";

const Home: FC<{}> = () => {
  return (
    <>
      <div className="board-row">
        <Cell alive />
        <Cell alive />
        <Cell alive />
      </div>
      <div className="board-row">
        <Cell alive />
        <Cell alive />
        <Cell alive />
      </div>
      <div className="board-row">
        <Cell alive />
        <Cell alive />
        <Cell alive />
      </div>
    </>
  );
};

export default Home;
