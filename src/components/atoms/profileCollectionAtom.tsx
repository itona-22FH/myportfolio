import React from "react";
import { atom } from "recoil";

export const profileCollectionAtom = atom({
  key: "profileCollectionAtom",
  default: {
    uid1: {
      userName: "helloUser",
      userImage: "https://bit.ly/dan-abramov",
      email: "****@email",
      password: "12345",
      twitterAccount: "****@twitter.com",
      youtubeAccount: "****@youtube.com",
      selfIntroduction: "はじめまして!helloUserです!!!",
      achievement: "大会優勝",
    },
    uid2: {
        userName: "helloUser",
        userImage: "https://bit.ly/code-beast",
        email: "****@email",
        password: "12345",
        twitterAccount: "****@twitter.com",
        youtubeAccount: "****@youtube.com",
        selfIntroduction: "はじめまして!helloUserです!!!",
        achievement: "大会優勝",
      },
    uid3: {
        userName: "helloUser",
        userImage: "https://bit.ly/ryan-florence",
        email: "****@email",
        password: "12345",
        twitterAccount: "****@twitter.com",
        youtubeAccount: "****@youtube.com",
        selfIntroduction: "はじめまして!helloUserです!!!",
        achievement: "大会優勝",
      },
    uid4: {
        userName: "helloUser",
        userImage: "https://bit.ly/kent-c-dodds",
        email: "****@email",
        password: "12345",
        twitterAccount: "****@twitter.com",
        youtubeAccount: "****@youtube.com",
        selfIntroduction: "はじめまして!helloUserです!!!",
        achievement: "大会優勝",
      },
  },
});
