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
    review: [],
  },
});

export default userInformationAtom;
