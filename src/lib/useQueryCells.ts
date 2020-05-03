import { useLocation } from "react-router-dom";
import { defaultCells } from "./cells";
import { cellsFromStr } from "./cellsConverter";

export const useQueryCells = (): boolean[][] => {
  const query = new URLSearchParams(useLocation().search);
  const cellsStr32 = query.get("cs");
  const rowsStr = query.get("r");

  // どちらかがクエリパラメータから取得できなければデフォルト値を返す
  if (!(cellsStr32 && rowsStr)) {
    return defaultCells;
  }

  // パースして NaN か 0 ならデフォルト値にする
  const rows = parseInt(rowsStr, 10);
  if (!rows) {
    return defaultCells;
  }

  return cellsFromStr(cellsStr32, rows);
};
