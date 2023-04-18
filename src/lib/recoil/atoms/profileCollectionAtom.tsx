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
      userName: "スティーブ",
      //アバター画像
      userAvatar: "https://bit.ly/dan-abramov",
      //メールアドレス
      email: "steve@email",
      //パスワード
      password: "steveGame",
      //Twitterアカウント
      twitterAccount: "steve@twitter.com",
      //Youtubeアカウント
      youtubeAccount: "steve@youtube.com",
      //自己紹介文
      selfIntroduction: "スティーブです。よろしくお願いします",
      //実績・経歴
      achievement: "優勝経験有り",
      //レビュー数
      reviewCount: 10,
      //レビュースコア
      reviewScore: 38,
    },
    {
      userID: "userB",
      userName: "マイク",
      userAvatar: "https://bit.ly/code-beast",
      email: "mike@email",
      password: "mikeGame",
      twitterAccount: "mike@twitter.com",
      youtubeAccount: "mike@youtube.com",
      selfIntroduction: "マイクです。よろしくお願いします",
      achievement: "BEST3経験有り",
      reviewCount: 120,
      reviewScore: 400,
    },
    {
      userID: "userC",
      userName: "マイケル",
      userAvatar: "https://bit.ly/ryan-florence",
      email: "michael@email",
      password: "michaelGame",
      twitterAccount: "michael@twitter.com",
      youtubeAccount: "michael@youtube.com",
      selfIntroduction: "マイケルです。よろしくお願いします",
      achievement: "BEST16経験有り",
      reviewCount: 400,
      reviewScore: 1000,
    },
    {
      userID: "userD",
      userName: "ジョン",
      userAvatar: "https://bit.ly/kent-c-dodds",
      email: "john@email",
      password: "johnGame",
      twitterAccount: "john@twitter.com",
      youtubeAccount: "john@youtube.com",
      selfIntroduction: "ジョンです。よろしくお願いします",
      achievement: "コーチング経験多数有り",
      reviewCount: 150,
      reviewScore: 800,
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
