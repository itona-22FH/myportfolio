import React from "react";
import { atom } from "recoil";

export const planManagementCollectionAtom = atom({
  key: "planManagementCollectionAtom",
  default: {
    uid1: ["planID1", "planID2", "planID3", "planID4"],
    uid2: ["2planID1", "2planID2", "2planID3", "2planID4"],
    uid3: ["3planID1", "3planID2", "3planID3", "3planID4"],
    uid4: ["4planID1", "4planID2", "4planID3", "4planID4"],
  },
});
