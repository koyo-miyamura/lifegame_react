import { useLocation } from "react-router-dom";
import { cellsFromStr } from "./cellsConverter";
import Game from "./lifegame";

const validateNum = (num: number): boolean => {
  // NaN か 0 なら false
  if (!num) {
    return false;
  }

  return num <= 100;
};

const validateCells = (
  cells: boolean[][],
  rows: number,
  cols: number
): boolean => {
  const cellRows = Game.rowLength(cells);
  const cellCols = Game.colLength(cells);

  return (
    cellRows === rows && cellCols === cols && cellRows <= 100 && cellCols <= 100
  );
};

export const cellsFromQuery = (queryString: string): boolean[][] => {
  const query = new URLSearchParams(queryString);

  // どちらかがクエリパラメータから取得できなければデフォルト値を返す
  const cellsStr32 = query.get("cs");
  const rowsStr = query.get("r");
  const colsStr = query.get("c");
  if (!(cellsStr32 && rowsStr && colsStr)) {
    return [[]];
  }

  const cols = parseInt(colsStr, 10);
  const rows = parseInt(rowsStr, 10);
  if (!validateNum(cols)) return [[]];
  if (!validateNum(rows)) return [[]];

  const cells = cellsFromStr(cellsStr32, rows, cols);
  if (!validateCells(cells, rows, cols)) return [[]];

  return cells;
};

export const useQueryCells = (): boolean[][] => {
  return cellsFromQuery(useLocation().search);
};
