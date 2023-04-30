import { atom } from "recoil";

//新規アカウントの初期値
const accountInformationAtom = atom<User>({
  key: "accountInformationAtom",
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
    review: {},
  },
});

export default accountInformationAtom;
