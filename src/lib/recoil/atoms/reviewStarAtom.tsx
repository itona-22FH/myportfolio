import React from "react";
import { atom } from "recoil";

export const reviewStarAtom = atom<number>({
  key: "reviewStarAtom",
  default: 0,
});
