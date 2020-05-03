import { useLocation } from "react-router-dom";
import { defaultCells } from "./cells";
import { cellsFromStr } from "./cellsConverter";
import Game from "./lifegame";

const validateCols = (cols: number): boolean => {
  // NaN か 0 ならデフォルト値にする
  if (!cols) {
    return false;
  }

  return cols <= 100;
};

const validateCells = (cells: boolean[][]): boolean => {
  return Game.rowLength(cells) <= 100 && Game.colLength(cells) <= 100;
};

export const useQueryCells = (): boolean[][] => {
  const query = new URLSearchParams(useLocation().search);

  // どちらかがクエリパラメータから取得できなければデフォルト値を返す
  const cellsStr32 = query.get("cs");
  const colsStr = query.get("c");
  if (!(cellsStr32 && colsStr)) {
    return defaultCells;
  }

  const cols = parseInt(colsStr, 10);
  if (!validateCols(cols)) return defaultCells;

  const cells = cellsFromStr(cellsStr32, cols);
  if (!validateCells(cells)) return defaultCells;

  return cells;
};
