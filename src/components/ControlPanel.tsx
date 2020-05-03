import React, { FC } from "react";
import {
  Box,
  Grid,
  Paper,
  Button,
  Input,
  Container,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Slider,
} from "@material-ui/core";
import KnownCells from "../lib/cells";

type ControlPanelProps = {
  rowLength: number;
  colLength: number;
  isStart: boolean;
  tickMs: number;
  onChangeStart?: () => void;
  onChangeRow?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCol?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangePreset?: (e: React.ChangeEvent<{ value: unknown }>) => void;
  onChangeTickMs?: (e: React.ChangeEvent<{}>, value: number | number[]) => void;
};

const ControlPanel: FC<ControlPanelProps> = ({
  rowLength,
  colLength,
  isStart,
  tickMs,
  onChangeStart = () => undefined,
  onChangeRow = () => undefined,
  onChangeCol = () => undefined,
  onChangePreset = () => undefined,
  onChangeTickMs = () => undefined,
}) => {
  const inputProps = { min: 2, max: 100 };

  return (
    <Container maxWidth="sm">
      <Paper variant="outlined" elevation={3}>
        <Box p={2}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <InputLabel shrink>Row</InputLabel>
              <Input
                type="number"
                value={rowLength}
                onChange={onChangeRow}
                inputProps={inputProps}
              />
            </Grid>
            <Grid item xs={2}>
              <InputLabel shrink>Col</InputLabel>
              <Input
                type="number"
                value={colLength}
                onChange={onChangeCol}
                inputProps={inputProps}
              />
            </Grid>
            <Grid item xs={4}>
              <InputLabel shrink>Cells</InputLabel>
              <Select defaultValue="default" onChange={onChangePreset}>
                <MenuItem value="default" dense>
                  <Typography color="textSecondary">Select</Typography>
                </MenuItem>
                {Array.from(KnownCells.keys()).map((cellName) => (
                  <MenuItem key={cellName} value={cellName}>
                    <Typography>{cellName}</Typography>
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item container xs={4} justify="flex-end">
              <Button
                variant="contained"
                color={isStart ? "secondary" : "primary"}
                onClick={onChangeStart}
              >
                {isStart ? "Stop" : "Start"}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <InputLabel shrink>Tick [ms]</InputLabel>
              <Slider
                value={tickMs}
                max={1000}
                min={50}
                step={10}
                valueLabelDisplay="auto"
                onChange={onChangeTickMs}
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default ControlPanel;
