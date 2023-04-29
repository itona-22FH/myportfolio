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
      review: [{"userC": 3},{"userB": 1}, {"userD": 5}],

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
      review: [{userC: 3},{userA: 1}, {userD: 2}],
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
      review: [{userA: 1},{userB: 5}, {userD: 1}],
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
      review: [{userC: 2},{userB: 4}, {userA: 5}],
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
