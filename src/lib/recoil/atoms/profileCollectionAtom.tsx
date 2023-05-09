import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const profileCollectionAtom = atom<User[]>({
  key: "profileCollectionAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
