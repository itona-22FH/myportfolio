import React from "react";
import { atom } from "recoil";

const newAccountRegisterAtom = atom<User>({
  key: "newAccountRegisterAtom",
  default: {
    userID: "",
    userName: "",
    userAvatar: "",
    email: "",
    password: "",
    twitterAccount: "",
    youtubeAccount: "",
    selfIntroduction: "",
    achievement: "",
    reviewCount: 0,
    reviewScore: 0,
  },
});

export default newAccountRegisterAtom;
