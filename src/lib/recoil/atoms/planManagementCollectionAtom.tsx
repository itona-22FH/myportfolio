import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const planManagementCollectionAtom = atom<PlanM[]>({
  key: "planManagementCollectionAtom",
  default: [
    {
      //ユーザーID(FirebaseID)
      userID: "userA",
      //プラン１ID
      plan1: "AplanID1",
      //プラン２ID
      plan2: "AplanID2",
      //プラン３ID
      plan3: "AplanID3",
      //プラン４ID
      plan4: "AplanID4",
    },
    {
      userID: "userB",
      plan1: "BplanID1",
      plan2: "BplanID2",
      plan3: "BplanID3",
      plan4: "BplanID4",
    },
    {
      userID: "userC",
      plan1: "CplanID1",
      plan2: "CplanID2",
      plan3: "CplanID3",
      plan4: "CplanID4",
    },
    {
      userID: "userD",
      plan1: "DplanID1",
      plan2: "DplanID2",
      plan3: "DplanID3",
      plan4: "DplanID4",
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
