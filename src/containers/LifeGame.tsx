import React, { FC, useState, useEffect } from "react";
import { Box, Grid, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Board from "../components/Board";
import ControlPanel from "../components/ControlPanel";
import ControlButtons from "../components/ControlButtons";
import Game from "../lib/lifegame";
import KnownCells from "../lib/cells";
import { shareUrl } from "../lib/cellsConverter";
import * as LocalStorage from "../lib/localStorage";

type LifeGameProps = {
  defaultCells: boolean[][];
};

const LifeGame: FC<LifeGameProps> = ({ defaultCells }) => {
  const [cells, setCells] = useState(defaultCells);
  const [tickMs, setTickMs] = useState(200);
  const [isStart, setIsStart] = useState(false);
  const [toast, setToast] = useState({
    open: false,
    message: "",
  });

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
  }, [cells, isStart, tickMs]);

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

  const handleClickShare = () => {
    setToast({ open: true, message: "Copy Share Link" });
  };
  const handleClickFavorite = () => {
    try {
      LocalStorage.save(cells);
    } catch (e) {
      throw new Error(e);
    }

    setToast({ open: true, message: "Save Your Cells" });
  };

  const handleCloseToast = () => {
    setToast({ open: false, message: "" });
  };

  const handleChangeTickMs = (
    _e: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    setTickMs(value as number);
  };

  return (
    <>
      <Snackbar
        open={toast.open}
        autoHideDuration={5000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseToast} severity="success">
          {toast.message}
        </Alert>
      </Snackbar>
      <ControlPanel
        rowLength={Game.rowLength(cells)}
        colLength={Game.colLength(cells)}
        isStart={isStart}
        tickMs={tickMs}
        onChangeCol={handleChangeCol}
        onChangeRow={handleChangeRow}
        onChangeStart={handleChangeStart}
        onChangePreset={handleChangePreset}
        onChangeTickMs={handleChangeTickMs}
      />
      <ControlButtons
        shareUrl={shareUrl(window.location.host, cells)}
        onClickShare={handleClickShare}
        onClickFavorite={handleClickFavorite}
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
