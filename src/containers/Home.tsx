import React, { FC, useCallback, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import LifeGame from "./LifeGame";
import { setIsStart } from "../actions/lifeGame";
import { useQueryCells } from "../lib/useQueryCells";
import { defaultCells } from "../lib/cells";
import Game from "../lib/lifegame";
import { RootState } from "../reducers";
import { RootAction } from "../actions";

const Home: FC<{}> = () => {
  const queryCells = useQueryCells();

  const dispatch: Dispatch<RootAction> = useDispatch(); // ここまでやらなくてもいい
  const onStart = useCallback(
    (isStart: boolean) => {
      dispatch(setIsStart(isStart));
    },
    [dispatch]
  );

  const isStart = useSelector((state: RootState) => state.LifeGame.isStart);

  return (
    <>
      <LifeGame
        defaultCells={Game.colLength(queryCells) ? queryCells : defaultCells}
        isStart={isStart}
        onStart={onStart}
      />
    </>
  );
};

export default Home;
