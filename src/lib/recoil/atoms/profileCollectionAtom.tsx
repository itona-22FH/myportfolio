import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const profileCollectionAtom = atom<User[]>({
  key: "profileCollectionAtom",
  default: [
    {
      //ユーザーID（FirebaseID）
      userID: "userA",
      //ユーザー名
      userName: "AAAAAAAAA",
      //アバター画像
      userAvatar: "https://bit.ly/dan-abramov",
      //メールアドレス
      email: "A@email",
      //パスワード
      password: "AAAAA",
      //Twitterアカウント
      twitterAccount: "A@twitter.com",
      //Youtubeアカウント
      youtubeAccount: "A@youtube.com",
      //自己紹介文
      selfIntroduction: "AAAAAAAAAAA",
      //実績・経歴
      achievement: "AAAAAAAAAA",
      //レビュー数
      reviewCount: 10,
      //レビュースコア
      reviewScore: 38,
    },
    {
      userID: "userB",
      userName: "BBBBBBBBBB",
      userAvatar: "https://bit.ly/code-beast",
      email: "B@email",
      password: "BBBBB",
      twitterAccount: "B@twitter.com",
      youtubeAccount: "B@youtube.com",
      selfIntroduction: "BBBBBBBBBBBB",
      achievement: "BBBBBBBBBB",
      reviewCount: 120,
      reviewScore: 400,
    },
    {
      userID: "userC",
      userName: "CCCCC",
      userAvatar: "https://bit.ly/ryan-florence",
      email: "C@email",
      password: "CCCCC",
      twitterAccount: "C@twitter.com",
      youtubeAccount: "C@youtube.com",
      selfIntroduction: "CCCCCCCCCCCCC",
      achievement: "CCCCCCCCCC",
      reviewCount: 400,
      reviewScore: 1000,
    },
    {
      userID: "userD",
      userName: "DDDDD",
      userAvatar: "https://bit.ly/kent-c-dodds",
      email: "D@email",
      password: "DDDDD",
      twitterAccount: "D@twitter.com",
      youtubeAccount: "D*@youtube.com",
      selfIntroduction: "DDDDDDDDDDDDD",
      achievement: "DDDDDDDDDD",
      reviewCount: 150,
      reviewScore: 800,
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
