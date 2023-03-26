import { atom } from "recoil";

export const planCollectionAtom = atom({
  key: "planCollectionAtom",
  default: [
    {
      //プランID（Firebase）
      planID: "AplanID1",
      //プラン登録者（FirebaseID）
      userID: "userA",
      //プラン名
      planTitle: "AAAAAAA",
      //プランサムネイル
      planImage: "https://bit.ly/2Z4KKcF",
      //学べる内容
      study: "AAAAAAA",
      //指導方法
      Guidance: "AAAAAAAAAA",
      //料金
      price: "AAAA",
      //アバター画像
      userAvatar: "https://bit.ly/dan-abramov",
      //ユーザー名
      userName: "AAAAAAAAA",
      //レビュー数
      reviewCount: 5,
      //レビュースコア
      reviewScore: 10,
    },
    {
      planID: "BplanID1",
      user: "userB",
      planTitle: "BBBBBBB",
      planImage: "https://bit.ly/2Z4KKcF",
      study: "BBBBBBB",
      Guidance: "BBBBBBBBBB",
      price: "BBBB",
      userAvatar: "https://bit.ly/code-beast",
      userName: "BBBBBBBBB",
      reviewCount: 12,
      reviewScore: 20,
    },
    {
      planID: "CplanID1",
      user: "userC",
      planTitle: "CCCCCCC",
      planImage: "https://bit.ly/2Z4KKcF",
      study: "CCCCCCC",
      Guidance: "CCCCCCCCCC",
      price: "CCCC",
      userAvatar: "https://bit.ly/ryan-florence",
      userName: "CCCCCCCCC",
      reviewCount: 10,
      reviewScore: 30,
    },
    {
      planID: "DplanID1",
      user: "userD",
      planTitle: "DDDDDDD",
      planImage: "https://bit.ly/2Z4KKcF",
      study: "DDDDDDDDDD",
      Guidance: "DDDDDDDDDD",
      price: "DDDD",
      userAvatar: "https://bit.ly/kent-c-dodds",
      userName: "DDDDDDDDD",
      reviewCount: 8,
      reviewScore: 40,
    },
  ],
});
