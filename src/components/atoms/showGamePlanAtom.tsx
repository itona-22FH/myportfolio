import React from "react";
import { atom } from "recoil";

export const showGamePlanAtom = atom<Plan[]>({
  key: "showGamePlanAtom",
  default: [],
});
