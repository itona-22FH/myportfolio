/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  FormControl,
  Container,
  Input,
  FormLabel,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ConfirmationBtn } from "../../components/ConfirmationBtn";
import { FormInput } from "../../components/FormInput";
import { HeadTitle } from "../../components/HeadTitle";
import { NewRegisterTextBox } from "../../components/NewRegisterTextBox";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const newAccount = () => {
  //新規アカウントの情報を保持するためのSTATEを定義
  const [newUserData, setNewUserData] = useState({
    userName: "",
    userAvatar: "",
    twitterAccount: "",
    youtubeAccount: "",
    selfIntroduction: "",
    achievement: "",
    review: {},
  });

  //パスワードチェックのためのSTATEを定義
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isRevealPassword, setIsRevealPassword] = useState(false);

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

  const inputPassword = (e: { target: { value: string } }) => {
    //確認用パスワードの入力
    setPassword(e.target.value);
  };

  const registerNewUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password === checkPassword) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          //登録が成功した時の処理
          setDoc(doc(db, "profileCollection", userCredential.user.uid), {
            userName: newUserData.userName,
            userAvatar: newUserData.userAvatar,
            twitterAccount: newUserData.twitterAccount,
            youtubeAccount: newUserData.youtubeAccount,
            selfIntroduction: newUserData.selfIntroduction,
            achievement: newUserData.achievement,
            review: {},
          });
        })
        .catch((error) => {
          console.error(error.code);
        });
    } else {
      alert("パスワードが違います。");
    }
  };

  const togglePassword = () => {
    setIsRevealPassword((prevState) => !prevState);
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
          <Box pb="10px" pt="10px">
            <Flex>
              <FormLabel htmlFor="パスワード" fontWeight="bold">
                パスワード
              </FormLabel>
              <span onClick={togglePassword}>
                {isRevealPassword ? <ViewIcon /> : <ViewOffIcon />}
              </span>
            </Flex>
            <Input
              id="パスワード"
              type={isRevealPassword ? "text" : "password"}
              placeholder="パスワード"
              borderColor="purple.300"
              p="4px"
              name="password"
              onChange={inputPassword}
              value={password}
            />
          </Box>
          <Box pb="10px" pt="10px">
            <FormLabel htmlFor="確認用パスワード" fontWeight="bold">
              確認用パスワード
            </FormLabel>
            <Input
              id="確認用パスワード"
              type={isRevealPassword ? "text" : "password"}
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
          confirmationLink="/"
        />
      </Container>
    </Box>
  );
};

export default newAccount;
