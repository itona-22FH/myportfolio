import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const planCollectionAtom = atom<Plan[]>({
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
      guidance: "AAAAAAAAAA",
      //料金
      price: "2,000",
      //アバター画像
      userAvatar: "https://bit.ly/dan-abramov",
      //ユーザー名
      userName: "AAAAAAAAA",
      //レビュー数
      reviewCount: 10,
      //レビュースコア
      reviewScore: 38,
    },
    {
      planID: "BplanID1",
      userID: "userB",
      planTitle: "BBBBBBB",
      planImage: "https://bit.ly/2Z4KKcF",
      study: "BBBBBBB",
      guidance: "BBBBBBBBBB",
      price: "1,500",
      userAvatar: "https://bit.ly/code-beast",
      userName: "BBBBBBBBB",
      reviewCount: 120,
      reviewScore: 400,
    },
    {
      planID: "CplanID1",
      userID: "userC",
      planTitle: "CCCCCCC",
      planImage: "https://bit.ly/2Z4KKcF",
      study: "CCCCCCC",
      guidance: "CCCCCCCCCC",
      price: "2,000",
      userAvatar: "https://bit.ly/ryan-florence",
      userName: "CCCCCCCCC",
      reviewCount: 400,
      reviewScore: 1000,
    },
    {
      planID: "DplanID1",
      userID: "userD",
      planTitle: "DDDDDDD",
      planImage: "https://bit.ly/2Z4KKcF",
      study: "DDDDDDDDDD",
      guidance: "DDDDDDDDDD",
      price: "1,000",
      userAvatar: "https://bit.ly/kent-c-dodds",
      userName: "DDDDDDDDD",
      reviewCount: 150,
      reviewScore: 800,
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
