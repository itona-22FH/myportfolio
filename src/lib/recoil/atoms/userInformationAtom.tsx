import React from "react";
import { atom } from "recoil";

//新規アカウントの初期値
const userInformationAtom = atom<User>({
  key: "userInformationAtom",
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
    review: [],
  },
});

export default userInformationAtom;
