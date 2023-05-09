import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const testLoginUserAtom = atom<string>({
  key: "testLoginUserAtom",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
