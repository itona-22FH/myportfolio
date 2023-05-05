import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const planCollectionAtom = atom<Plan[]>({
  key: "planCollectionAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
