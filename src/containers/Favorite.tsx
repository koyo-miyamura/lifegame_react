import React, { FC } from "react";
import { Grid, Box, ButtonGroup, Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import * as LocalStorage from "../lib/localStorage";
import Board from "../components/Board";
import { cellsFromQuery } from "../lib/useQueryCells";
import { shareQueryParams } from "../lib/cellsConverter";

const Favorite: FC<{}> = () => {
  const history = useHistory();

  const handleClickGoToGame = (cells: boolean[][]) => {
    history.push(`/${shareQueryParams(cells)}`);
  };
  const handleClickDelete = (urlParams: string) => {
    LocalStorage.remove(urlParams);
    history.replace("/favorite"); // リロードする
  };

  return (
    <>
      {LocalStorage.findAllUrlParams().map((urlParams) => (
        <Box key={urlParams} mt={4} mb={4}>
          <Grid container justify="center">
            <Grid item zeroMinWidth>
              <Board rows={cellsFromQuery(urlParams)} />
            </Grid>
          </Grid>

          <Grid container alignItems="center" justify="center">
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button
                onClick={() => handleClickGoToGame(cellsFromQuery(urlParams))}
              >
                <Typography variant="button" style={{ textTransform: "none" }}>
                  Go to Game
                </Typography>
              </Button>
              <Button onClick={() => handleClickDelete(urlParams)}>
                <Typography variant="button" style={{ textTransform: "none" }}>
                  Delete
                </Typography>
              </Button>
            </ButtonGroup>
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default Favorite;
