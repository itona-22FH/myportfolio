/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, FormControl, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ConfirmationBtn } from "../../components/ConfirmationBtn";
import { FormInput } from "../../components/FormInput";
import { HeadTitle } from "../../components/HeadTitle";
import { NewRegisterTextBox } from "../../components/NewRegisterTextBox";
import { v4 as uuidv4 } from "uuid";
import { useRecoilState, useSetRecoilState } from "recoil";
import newAccountRegisterAtom from "../../lib/recoil/atoms/newAccountRegisterAtom";
import { profileCollectionAtom } from "../../lib/recoil/atoms/profileCollectionAtom";

const newAccount = () => {
  const [newUserData, setNewUserData] = useRecoilState(newAccountRegisterAtom);
  const [checkPassword, setCheckPassword] = useState("");
  const setProfileCollections = useSetRecoilState(profileCollectionAtom);

  useEffect(() => {
    setNewUserData((prev) => ({ ...prev, userID: uuidv4() }));
  }, []);

  const inputUserInformation = (e: {
    target: { name: string; value: string | number };
  }) => {
    const { name, value } = e.target;
    setNewUserData((prev) => ({ ...prev, [name]: value }));
  };

  const addNewAccountHandle = (e: { preventDefault: () => void }) => {
    if (newUserData.password === checkPassword) {
      setProfileCollections((prev) => [...prev, newUserData]);
    } else {
      console.log("エラー");
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
          />
          <FormInput
            label="プロフィール画像"
            type="file"
            placeholder="画像を選択してください"
            formName="userAvatar"
            onChangeHandle={inputUserInformation}
          />
          <FormInput
            label="メールアドレス"
            type="email"
            placeholder="********@email.com"
            formName="email"
            onChangeHandle={inputUserInformation}
          />
          <FormInput
            label="パスワード"
            type="password"
            placeholder="password"
            formName="password"
            onChangeHandle={inputUserInformation}
          />
          <FormInput
            label="確認用パスワード"
            type="password"
            placeholder="CheckPassword"
            formName="checkPassword"
            onChangeHandle={(e: {
              target: { value: React.SetStateAction<string> };
            }) => {
              setCheckPassword(e.target.value);
            }}
          />
          <FormInput
            label="Twitterアカウント"
            type="url"
            placeholder="https://twitter.com/..."
            formName="twitterAccount"
            onChangeHandle={inputUserInformation}
          />
          <FormInput
            label="Youtubeアカウント"
            type="url"
            placeholder="https://www.youtube.com.channel/..."
            formName="youtubeAccount"
            onChangeHandle={inputUserInformation}
          />
          <NewRegisterTextBox
            htmlFor="自己紹介"
            placeholder="こんにちは、〇〇クラン所属のHelloUserです！！"
            textBoxName="selfIntroduction"
            onChangeHandle={inputUserInformation}
          />
          <NewRegisterTextBox
            htmlFor="経歴・実績"
            placeholder="〇〇大会優勝
            〇〇大会BEST3"
            textBoxName="achievement"
            onChangeHandle={inputUserInformation}
          />
        </FormControl>
        <ConfirmationBtn
          text="新規登録する"
          colorScheme="purple"
          color="white"
          width="100%"
          confirmation="新規登録"
          handleConfirmation={addNewAccountHandle}
          confirmationLink={"/newAccount"}
        />
      </Container>
    </Box>
  );
};

export default newAccount;
