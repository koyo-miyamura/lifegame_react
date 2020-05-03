import { useLocation } from "react-router-dom";
import { defaultCells } from "./cells";
import { cellsFromStr } from "./cellsConverter";
import Game from "./lifegame";

const validateNum = (num: number): boolean => {
  // NaN か 0 なら false
  if (!num) {
    return false;
  }

  return num <= 100;
};

const validateCells = (cells: boolean[][]): boolean => {
  return Game.rowLength(cells) <= 100 && Game.colLength(cells) <= 100;
};

export const useQueryCells = (): boolean[][] => {
  const query = new URLSearchParams(useLocation().search);

  // どちらかがクエリパラメータから取得できなければデフォルト値を返す
  const cellsStr32 = query.get("cs");
  const rowsStr = query.get("r");
  const colsStr = query.get("c");
  if (!(cellsStr32 && rowsStr && colsStr)) {
    return defaultCells;
  }

  const cols = parseInt(colsStr, 10);
  const rows = parseInt(rowsStr, 10);
  if (!validateNum(cols)) return defaultCells;
  if (!validateNum(rows)) return defaultCells;

  const cells = cellsFromStr(cellsStr32, rows, cols);
  if (!validateCells(cells)) return defaultCells;

  return cells;
};
