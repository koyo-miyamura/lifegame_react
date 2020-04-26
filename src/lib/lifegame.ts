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

export default {
  nextCells: (cells: boolean[][]): boolean[][] => {
    return cells.map((row, i) =>
      row.map((alive, j) => isAlive(alive, cells, i, j))
    );
  },
  rowLength: (cells: boolean[][]) => cells.length,
  colLength: (cells: boolean[][]) => (cells[0] ? cells[0].length : 0),

  // Generate cells[rowLen][colLen] (all false)
  generateCells: (rowLen: number, colLen: number): boolean[][] => {
    return Array.from(Array(rowLen), () =>
      Array.from(Array(colLen), () => false)
    );
  },
};
