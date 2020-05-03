import React, { FC, useState, useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import Board from "../components/Board";
import ControlPanel from "../components/ControlPanel";
import Game from "../lib/lifegame";
import KnownCells, { defaultCells } from "../lib/cells";

const tickMs = 200;

const LifeGame: FC<{}> = () => {
  const [cells, setCells] = useState(defaultCells);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (!isStart) {
      return () => {
        // do nothing.
      };
    }

    const id = setInterval(() => {
      setCells(Game.nextCells(cells));
    }, tickMs);

    return () => {
      clearInterval(id);
    };
  }, [cells, isStart]);

  const handleChangeStart = () => {
    setIsStart(!isStart);
  };

  const handleClickBoard = (i: number, j: number) => {
    const next = [...cells];
    next[i][j] = !next[i][j];
    setCells(next);
  };

  const handleChangeRow = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const next = Game.generateCells(
      Number(e.target.value),
      Game.colLength(cells)
    );
    setCells(next);
  };
  const handleChangeCol = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const next = Game.generateCells(
      Game.rowLength(cells),
      Number(e.target.value)
    );
    setCells(next);
  };

  const handleChangePreset = (e: React.ChangeEvent<{ value: unknown }>) => {
    const key = e.target.value as string;
    const selectedCells = KnownCells.get(key);
    if (selectedCells) setCells(selectedCells);
  };

  return (
    <>
      <ControlPanel
        rowLength={Game.rowLength(cells)}
        colLength={Game.colLength(cells)}
        isStart={isStart}
        onChangeCol={handleChangeCol}
        onChangeRow={handleChangeRow}
        onChangeStart={handleChangeStart}
        onChangePreset={handleChangePreset}
      />
      <Grid container alignItems="center" justify="center">
        <Grid item zeroMinWidth>
          <Box mt={4}>
            <Board rows={cells} onClick={(i, j) => handleClickBoard(i, j)} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LifeGame;
