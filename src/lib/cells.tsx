const knownCells: Map<string, boolean[][]> = new Map([
  [
    "Blinker",
    [
      [false, true, false],
      [false, true, false],
      [false, true, false],
    ],
  ],
  [
    "Toad",
    [
      [false, false, false, false],
      [false, true, true, true],
      [true, true, true, false],
      [false, false, false, false],
    ],
  ],
  [
    "Beacon",
    [
      [true, true, false, false],
      [true, true, false, false],
      [false, false, true, true],
      [false, false, true, true],
    ],
  ],
  [
    "Octagon",
    [
      [false, false, false, true, true, false, false, false],
      [false, false, true, false, false, true, false, false],
      [false, true, false, false, false, false, true, false],
      [true, false, false, false, false, false, false, true],
      [true, false, false, false, false, false, false, true],
      [false, true, false, false, false, false, true, false],
      [false, false, true, false, false, true, false, false],
      [false, false, false, true, true, false, false, false],
    ],
  ],
  [
    "Glider",
    [
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, true, true, true],
      [false, false, false, false, false, true, false, false],
      [false, false, false, false, false, false, true, false],
    ],
  ],
  // prettier-ignore
  [
    "Galaxy",
    [
      [false, false ,false, false, false, false, false, false, false, false, false, false, false],
      [false, false ,false, false, false, false, false, false, false, false, false, false, false],
      [false, false ,true, true, false, true, true, true, true, true, true, false, false],
      [false, false ,true, true, false, true, true, true, true, true, true, false, false],
      [false, false ,true, true, false, false, false, false, false, false, false, false, false],
      [false, false ,true, true, false, false, false, false, false, true, true, false, false],
      [false, false ,true, true, false, false, false, false, false, true, true, false, false],
      [false, false ,true, true, false, false, false, false, false, true, true, false, false],
      [false, false ,false, false, false, false, false, false, false, true, true, false, false],
      [false, false ,true, true, true, true, true, true, false, true, true, false, false],
      [false, false ,true, true, true, true, true, true, false, true, true, false, false],
      [false, false ,false, false, false, false, false, false, false, false, false, false, false],
      [false, false ,false, false, false, false, false, false, false, false, false, false, false],
    ],
  ],
  // prettier-ignore
  [
    "Queen bee shuttle",
    [
      [false, false ,false, false, false, false, false, false, false, false, false, false, false, false, false ,false, false, false, false, false, false, false, false, false],
      [false, false ,false, false, false, false, false, false, false, false, false, false, false, false, false ,false, false, false, false, false, false, false, false, false],
      [false, false ,false, false, false, false, false, false, false, false, true, false, false, false, false ,false, false, false, false, false, false, false, false, false],
      [false, false ,false, false, false, false, false, false, true, false, true, false, false, false, false ,false, false, false, false, false, false, false, false, false],
      [false, false ,false, false, false, false, false, true, false, true, false, false, false, false, false ,false, false, false, false, false, false, false, false, false],
      [false, true ,true, false, false, false, true, false, false, true, false, false, false, false, false ,false, false, false, false, false, false, true, true, false],
      [false, true ,true, false, false, false, false, true, false, true, false, false, false, false, false ,false, false, false, false, false, false, true, true, false],
      [false, false ,false, false, false, false, false, false, true, false, true, false, false, false, false ,false, false, false, false, false, false, false, false, false],
      [false, false ,false, false, false, false, false, false, false, false, true, false, false, false, false ,false, false, false, false, false, false, false, false, false],
      [false, false ,false, false, false, false, false, false, false, false, false, false, false, false, false ,false, false, false, false, false, false, false, false, false],
      [false, false ,false, false, false, false, false, false, false, false, false, false, false, false, false ,false, false, false, false, false, false, false, false, false],
    ],
  ],
]);

export const defaultCells = {
  name: "Octagon",
  value: knownCells.get("Octagon") as boolean[][],
};

export default knownCells;
