import React from "react";
import { atom } from "recoil";

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
    reviewCount: 0,
    reviewScore: 0,
  },
});

export default userInformationAtom;
