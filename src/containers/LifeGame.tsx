import React, { FC, useState, useEffect } from "react";
import {
  Box,
  Grid,
  Paper,
  Button,
  Input,
  Container,
  InputLabel,
} from "@material-ui/core";
import Board from "../components/Board";

const aliveCellNum = (cells: boolean[][], i: number, j: number): number => {
  const aroundCells = [
    cells[i - 1] ? cells[i - 1][j - 1] : false,
    cells[i - 1] ? cells[i - 1][j] : false,
    cells[i - 1] ? cells[i - 1][j + 1] : false,
    cells[i] ? cells[i][j - 1] : false,
    cells[i] ? cells[i][j + 1] : false,
    cells[i + 1] ? cells[i + 1][j - 1] : false,
    cells[i + 1] ? cells[i + 1][j] : false,
    cells[i + 1] ? cells[i + 1][j + 1] : false,
  ];

  return aroundCells.filter((v) => v).length;
};

const isAlive = (
  alive: boolean,
  cells: boolean[][],
  i: number,
  j: number
): boolean => {
  switch (aliveCellNum(cells, i, j)) {
    case 0:
    case 1:
      return false;
    case 2:
      return alive;
    case 3:
      return true;
    default:
      return false;
  }
};

const nextCells = (cells: boolean[][]): boolean[][] => {
  return cells.map((row, i) =>
    row.map((alive, j) => isAlive(alive, cells, i, j))
  );
};

const defaultCells: boolean[][] = [
  [false, false, false, true, true, false, false, false],
  [false, false, true, false, false, true, false, false],
  [false, true, false, false, false, false, true, false],
  [true, false, false, false, false, false, false, true],
  [true, false, false, false, false, false, false, true],
  [false, true, false, false, false, false, true, false],
  [false, false, true, false, false, true, false, false],
  [false, false, false, true, true, false, false, false],
];

const tickMs = 300;

const LifeGame: FC<{}> = () => {
  const [cells, setCells] = useState(defaultCells);
  const [isStart, setIsStart] = useState(false);

  const rowLength = () => {
    return cells.length;
  };

  const colLength = () => {
    return cells[0] ? cells[0].length : 0;
  };

  // Generate cells[rowLen][colLen] (all false)
  const generateCells = (rowLen: number, colLen: number) => {
    return Array.from(Array(rowLen), () =>
      Array.from(Array(colLen), () => false)
    );
  };

  useEffect(() => {
    if (!isStart) {
      return () => {
        // do nothing.
      };
    }

    const id = setInterval(() => {
      setCells(nextCells(cells));
    }, tickMs);

    return () => {
      clearInterval(id);
    };
  }, [cells, isStart]);

  const handleClick = () => {
    setIsStart(!isStart);
  };

  const handleClickBoard = (i: number, j: number) => {
    const next = [...cells];
    next[i][j] = !next[i][j];
    setCells(next);
  };

  const handleChangeRow = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const next = generateCells(Number(e.target.value), colLength());
    setCells(next);
  };
  const handleChangeCol = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const next = generateCells(rowLength(), Number(e.target.value));
    setCells(next);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Paper variant="outlined" elevation={3}>
          <Box p={2}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <InputLabel shrink>row</InputLabel>
                <Input
                  type="number"
                  value={rowLength()}
                  onChange={handleChangeRow}
                  inputProps={{ min: 1, max: 50 }}
                />
              </Grid>
              <Grid item xs={2}>
                <InputLabel shrink>column</InputLabel>
                <Input
                  type="number"
                  value={colLength()}
                  onChange={handleChangeCol}
                  inputProps={{ min: 1, max: 50 }}
                />
              </Grid>
              <Grid item container xs justify="flex-end">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  {isStart ? "Stop" : "Start"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>

      <Grid container alignItems="center" justify="center">
        <Box mt={4}>
          <Board rows={cells} onClick={(i, j) => handleClickBoard(i, j)} />
        </Box>
      </Grid>
    </>
  );
};

export default LifeGame;
