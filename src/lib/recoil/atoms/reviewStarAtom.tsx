import { atom } from "recoil";

//レビュー投稿画面の星の初期値の設定
export const reviewStarAtom = atom<number>({
  key: "reviewStarAtom",
  default: 0,
});
