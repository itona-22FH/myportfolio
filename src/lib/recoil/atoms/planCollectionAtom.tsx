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
      planTitle: "APEX",
      //プランサムネイル
      planImage: "https://bit.ly/2Z4KKcF",
      //学べる内容
      study: "エーペックスレジェンズについて学べます",
      //指導方法
      guidance: "画面共有ツールを使用します",
      //ゲームタイトル
      titleCategory:"エーペックスレジェンズ",
      //ゲームジャンル
      genreCategory:"FPS・TPS",
      //料金
      price: "2000",
      //アバター画像
    },
    {
      planID: "BplanID1",
      userID: "userB",
      planTitle: "FIFA",
      planImage: "https://bit.ly/2Z4KKcF",
      study: "FIFAについて学べます",
      guidance: "Discordを使います",
      titleCategory:" FIFA",
      genreCategory:"スポーツ",
      price: "1500",
    },
    {
      planID: "CplanID1",
      userID: "userC",
      planTitle: "ストリートファイター",
      planImage: "https://bit.ly/2Z4KKcF",
      study: "ストリートファイターについて学べます",
      guidance: "ZOOMを使います",
      titleCategory:"ストリートファイター",
      genreCategory:"格闘",
      price: "2000",
    },
    {
      planID: "DplanID1",
      userID: "userD",
      planTitle: "リーグオブレジェンド",
      planImage: "https://bit.ly/2Z4KKcF",
      study: "リーグ・オブ・レジェンドについて学べます",
      guidance: "コーチング動画を渡します",
      titleCategory:" リーグ・オブ・レジェンド",
      genreCategory:"MOBA",
      price: "1000",
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
