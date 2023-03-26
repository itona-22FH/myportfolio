import React from "react";
import { atom } from "recoil";

export const testLoginUserAtom = atom({
  key: "testLoginUserAtom",
  default: "userA",
});
