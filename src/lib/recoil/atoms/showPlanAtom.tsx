import { atom } from "recoil";

export const showPlanAtom = atom<ShowPlan[]>({
  key: "showPlanAtom",
  default: [],
});
