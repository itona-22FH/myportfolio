import { atom } from "recoil";


//表示したいプランをセットするためのSTATE
export const showPlanAtom = atom<ShowPlan[]>({
  key: "showPlanAtom",
  default: [],
});
