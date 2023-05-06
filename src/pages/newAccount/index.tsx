/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  FormControl,
  Container,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ConfirmationBtn } from "../../components/ConfirmationBtn";
import { FormInput } from "../../components/FormInput";
import { HeadTitle } from "../../components/HeadTitle";
import { NewRegisterTextBox } from "../../components/NewRegisterTextBox";
import { v4 as uuidv4 } from "uuid";
import { useSetRecoilState } from "recoil";
import { profileCollectionAtom } from "../../lib/recoil/atoms/profileCollectionAtom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../lib/firebase/firebaseConfig";

const newAccount = () => {
  //新規アカウントの情報を保持するためのSTATEを定義
  const [newUserData, setNewUserData] = useState({
    userId: "",
    userName: "",
    userAvatar: "",
    twitterAccount: "",
    youtubeAccount: "",
    selfIntroduction: "",
    achievement: "",
    review: [],
  });

  //パスワードチェックのためのSTATEを定義
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  //プロフィールコレクション更新のためのSET関数を定義
  const setProfileCollections = useSetRecoilState(profileCollectionAtom);

  useEffect(() => {
    //初回レンダリング時にuserIDをuuidによって生成
    setNewUserData((prev) => prev);
  }, []);

  const inputUserInformation = (e: {
    target: { name: string; value: string | number };
  }) => {
    //inputタグのtargetのnameとvalueを取得
    const { name, value } = e.target;
    //newUserDataが持つ同一のKEY名の値を上書き
    setNewUserData((prev) => ({ ...prev, [name]: value }));
  };

  const inputCheckPassword = (e: { target: { value: string } }) => {
    //確認用パスワードの入力
    setCheckPassword(e.target.value);
  };

  // const addNewAccountHandle = () => {
  //   if (password === checkPassword) {
  //     // パスワード一致？
  //     //プロフィールコレクションに新規アカウントを追加
  //     setProfileCollections((prev) => [...prev, newUserData]);
  //   } else {
  //     //パスワード不一致
  //     //エラー出力
  //     console.error("エラー");
  //   }
  // };

  const registerNewUser = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
            //登録が成功した時の処理
            console.log(userCredential)
		})
		.catch((error) => {
			console.log(error.code);
		});
  };

  return (
    <Box pt="10px" pb="10px">
      <Container maxW="1100px" bg="whiteAlpha.800" p="5px" borderRadius="10px">
        <HeadTitle title="新規登録" />
        <FormControl pt="20px">
          <FormInput
            label="ユーザー名"
            type="text"
            placeholder="userName"
            formName="userName"
            onChangeHandle={inputUserInformation}
            formValue={newUserData.userName}
          />
          <FormInput
            label="プロフィール画像"
            type="file"
            placeholder="画像を選択してください"
            formName="userAvatar"
            onChangeHandle={inputUserInformation}
            formValue={newUserData.userAvatar}
          />
          <FormInput
            label="メールアドレス"
            type="email"
            placeholder="********@email.com"
            formName="email"
            onChangeHandle={(e) => {
              setEmail(e.target.value as string);
            }}
            formValue={email}
          />
          <FormInput
            label="パスワード"
            type="password"
            placeholder="password"
            formName="password"
            onChangeHandle={(e) => setPassword(e.target.value as string)}
            formValue={password}
          />
          <Box pb="10px" pt="10px">
            <FormLabel htmlFor="確認用パスワード" fontWeight="bold">
              確認用パスワード
            </FormLabel>
            <Input
              id="確認用パスワード"
              type="password"
              placeholder="確認用パスワード"
              borderColor="purple.300"
              p="4px"
              name="checkPassword"
              onChange={inputCheckPassword}
              value={checkPassword}
            />
          </Box>
          <FormInput
            label="Twitterアカウント"
            type="url"
            placeholder="https://twitter.com/..."
            formName="twitterAccount"
            onChangeHandle={inputUserInformation}
            formValue={newUserData.twitterAccount}
          />
          <FormInput
            label="Youtubeアカウント"
            type="url"
            placeholder="https://www.youtube.com.channel/..."
            formName="youtubeAccount"
            onChangeHandle={inputUserInformation}
            formValue={newUserData.youtubeAccount}
          />
          <NewRegisterTextBox
            htmlFor="自己紹介"
            placeholder="こんにちは、〇〇クラン所属のHelloUserです！！"
            textBoxName="selfIntroduction"
            onChangeHandle={inputUserInformation}
            textBoxValue={newUserData.selfIntroduction}
          />
          <NewRegisterTextBox
            htmlFor="経歴・実績"
            placeholder="〇〇大会優勝
            〇〇大会BEST3"
            textBoxName="achievement"
            onChangeHandle={inputUserInformation}
            textBoxValue={newUserData.achievement}
          />
        </FormControl>
        <ConfirmationBtn
          text="新規登録する"
          colorScheme="purple"
          color="white"
          width="100%"
          confirmation="新規登録"
          handleConfirmation={registerNewUser}
          confirmationLink="/newAccount"
        />
      </Container>
    </Box>
  );
};

export default newAccount;
