import React, { FC } from "react";
import {
  Box,
  Grid,
  Paper,
  Button,
  Input,
  Container,
  InputLabel,
} from "@material-ui/core";

type ControlPanelProps = {
  rowLength: number;
  colLength: number;
  isStart: boolean;
  onChangeStart?: () => void;
  onChangeRow?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCol?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const ControlPanel: FC<ControlPanelProps> = ({
  rowLength,
  colLength,
  isStart,
  onChangeStart = () => undefined,
  onChangeRow = () => undefined,
  onChangeCol = () => undefined,
}) => {
  const inputProps = { min: 2, max: 100 };

  return (
    <Container maxWidth="sm">
      <Paper variant="outlined" elevation={3}>
        <Box p={2}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <InputLabel shrink>row</InputLabel>
              <Input
                type="number"
                value={rowLength}
                onChange={onChangeRow}
                inputProps={inputProps}
              />
            </Grid>
            <Grid item xs={2}>
              <InputLabel shrink>column</InputLabel>
              <Input
                type="number"
                value={colLength}
                onChange={onChangeCol}
                inputProps={inputProps}
              />
            </Grid>
            <Grid item container xs justify="flex-end">
              <Button
                variant="contained"
                color={isStart ? "secondary" : "primary"}
                onClick={onChangeStart}
              >
                {isStart ? "Stop" : "Start"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default ControlPanel;
