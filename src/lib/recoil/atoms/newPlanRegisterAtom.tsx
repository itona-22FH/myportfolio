import React from "react";
import { atom } from "recoil";

const newPlanRegisterAtom = atom<Plan>({
  key: "newPlanRegisterAtom",
  default: {
    planID: "",
    userID: "",
    planTitle: "",
    planImage: "",
    study: "",
    guidance: "",
    titleCategory: "",
    genreCategory: "",
    price: "",
    userAvatar: "",
    userName: "",
    reviewCount: 0,
    reviewScore: 0,
  },
});

export default newPlanRegisterAtom;
