import { useLocation } from "react-router-dom";
import { defaultCells } from "./cells";
import { cellsFromStr } from "./cellsConverter";
import Game from "./lifegame";

export const useQueryCells = (): boolean[][] => {
  const query = new URLSearchParams(useLocation().search);
  const cellsStr32 = query.get("cs");
  const colsStr = query.get("c");

  // どちらかがクエリパラメータから取得できなければデフォルト値を返す
  if (!(cellsStr32 && colsStr)) {
    return defaultCells;
  }

  // パースして NaN か 0 ならデフォルト値にする
  const cols = parseInt(colsStr, 10);
  if (!cols) {
    return defaultCells;
  }
  if (cols > 100) {
    return defaultCells;
  }

  const cells = cellsFromStr(cellsStr32, cols);

  if (Game.rowLength(cells) > 100) {
    return defaultCells;
  }

  return cells;
};
