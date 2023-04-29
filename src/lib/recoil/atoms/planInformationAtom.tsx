import React from "react";
import { atom } from "recoil";


//新規プランの初期値
const planInformationAtom = atom<Plan>({
  key: "planInformationAtom",
  default: {
    planID: "",
    userID: "",
    planTitle: "",
    planImage: "https://bit.ly/2Z4KKcF",
    study: "",
    guidance: "",
    titleCategory: "",
    genreCategory: "",
    price: "",
  },
});

export default planInformationAtom;
