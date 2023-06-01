/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, FormControl, Container } from "@chakra-ui/react";
import React, { useState } from "react";
import { ConfirmationBtn } from "../../components/ConfirmationBtn";
import { FormInput } from "../../components/FormInput";
import { HeadTitle } from "../../components/HeadTitle";
import { NewRegisterTextBox } from "../../components/NewRegisterTextBox";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { FormPassword } from "../../components/FormPassword";
import { useRouter } from "next/router";

const newAccount = () => {
  const router = useRouter();

  //新規アカウントの情報を保持するためのSTATEを定義
  const [newUserData, setNewUserData] = useState({
    email: "",
    contactEmail: "",
    password: "",
    checkPassword: "",
    userName: "",
    userAvatar: "",
    twitterAccount: "",
    youtubeAccount: "",
    selfIntroduction: "",
    achievement: "",
    review: {},
  });

  const inputUserInformation = (e: {
    target: { name: string; value: string | number };
  }) => {
    //inputタグのtargetのnameとvalueを取得
    const { name, value } = e.target;
    //newUserDataが持つ同一のKEY名の値を上書き
    setNewUserData((prev) => ({ ...prev, [name]: value }));
  };

  const registerNewUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (newUserData.password === newUserData.checkPassword) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          newUserData.email,
          newUserData.password
        );
        //登録が成功した時の処理
        setDoc(doc(db, "profileCollection", userCredential.user.uid), {
          userName: newUserData.userName,
          userAvatar: newUserData.userAvatar,
          twitterAccount: newUserData.twitterAccount,
          youtubeAccount: newUserData.youtubeAccount,
          selfIntroduction: newUserData.selfIntroduction,
          achievement: newUserData.achievement,
          contactEmail: newUserData.contactEmail,
          review: {},
        });
        router.push("/");
      } catch (error) {
        console.error(error);
      }
    }
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
            onChangeHandle={inputUserInformation}
            formValue={newUserData.email}
          />
          <FormInput
            label="連絡用メールアドレス"
            type="email"
            placeholder="********@email.com"
            formName="contactEmail"
            onChangeHandle={inputUserInformation}
            formValue={newUserData.contactEmail}
          />
          <FormPassword
            onChangeHandle={inputUserInformation}
            formValue={newUserData.password}
            formLabel="パスワード"
            formName="password"
          />
          <FormPassword
            onChangeHandle={inputUserInformation}
            formValue={newUserData.checkPassword}
            formLabel="確認用パスワード"
            formName="checkPassword"
          />
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
        />
      </Container>
    </Box>
  );
};

export default newAccount;
