import _ from "lodash";
import { shareQueryParams } from "./cellsConverter";

const storageKey = "favorite cells";

// cells をクエリパラメータの形にしてローカルストレージに保存します
export const save = (cells: boolean[][]) => {
  // Note: JSON形式の文字列で格納されている
  const favoriteCellsUrlsStr = window.localStorage.getItem(storageKey);
  const cellsStr = shareQueryParams(cells);

  let cellUrls = [cellsStr];
  if (favoriteCellsUrlsStr) {
    const favoriteCellUrls = JSON.parse(favoriteCellsUrlsStr) as string[];
    cellUrls = _.uniq([...favoriteCellUrls, cellsStr]);
  }

  window.localStorage.setItem(storageKey, JSON.stringify(cellUrls));
};

// ローカルストレージに入っているクエリパラメータを返します
export const findAllUrlParams = (): string[] => {
  const favoriteCellsUrlsStr = window.localStorage.getItem(storageKey);
  if (!favoriteCellsUrlsStr) return [];

  return JSON.parse(favoriteCellsUrlsStr);
};

// 指定したクエリパラメータをローカルストレージから削除します
export const remove = (targetUrlParams: string) => {
  const urlParams = findAllUrlParams();
  const deleted = urlParams.filter((p) => p !== targetUrlParams);

  window.localStorage.setItem(storageKey, JSON.stringify(deleted));
};
