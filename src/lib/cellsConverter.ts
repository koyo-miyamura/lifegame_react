// -------------------------
// /* cells -> string */
// -------------------------

// boolean -> str の変換（2進数）
const boolToStr = (b: boolean): string => {
  return b ? "1" : "0";
};
const boolsToStr = (bs: boolean[]): string => {
  return bs.reduce((acc, b) => acc + boolToStr(b), "");
};
const bool2sToStr = (bss: boolean[][]): string => {
  return bss.reduce((acc, bs) => acc + boolsToStr(bs), "");
};

// 文字列で表現された2進数を32進数を使って文字数圧縮する
const zipStr32 = (str: string): string => {
  let result = "";
  for (let i = 0; i < str.length; i += 5) {
    const tmp = str.slice(i, i + 5);
    result += parseInt(tmp, 2).toString(32);
  }

  return result;
};

// cells -> string への符号化（主にクエリパラメータ用）
export const cellsToStr = (cells: boolean[][]): string => {
  return zipStr32(bool2sToStr(cells));
};

// -------------------------
// /* string -> cells */
// -------------------------

// 文字列表現された32進数を2進数を使って復号する
export const unzipStr32 = (str: string): string => {
  let result = "";
  for (let i = 0; i < str.length; i += 1) {
    const tmp = str.slice(i, i + 1);
    result += parseInt(tmp, 32).toString(2).padStart(5, "0");
  }

  return result;
};

// 文字列をnum毎に分割した配列にして返す
const chunk = (str: string, num: number): string[] => {
  let result: string[] = [];
  for (let i = 0; i < str.length; i += num) {
    result = [...result, str.slice(i, i + num)];
  }

  return result;
};

// 2進数表現されたstringと列数cからcellsを複合する
const strToBool2s = (str: string, c: number): boolean[][] => {
  return chunk(str, c).map((ss) => ss.split("").map((s) => s === "1"));
};

// （クエリパラメータなどで受け取った）32進数表現されたstringと列数rからcellsを復号する
export const cellsFromStr = (str: string, c: number): boolean[][] => {
  return strToBool2s(unzipStr32(str), c);
};
