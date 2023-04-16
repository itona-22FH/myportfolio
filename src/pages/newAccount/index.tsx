import { Box, FormControl, Container } from "@chakra-ui/react";
import React from "react";
import { ConfirmationBtn } from "../../components/ConfirmationBtn";
import { FormInput } from "../../components/FormInput";
import { HeadTitle } from "../../components/HeadTitle";
import { NewRegisterTextBox } from "../../components/NewRegisterTextBox";

const newAccount = () => {
  return (
    <Box pt="10px" pb="10px">
      <Container maxW="1100px" bg="whiteAlpha.800" p="5px" borderRadius="10px">
        <HeadTitle title="新規登録" />
        <FormControl pt="20px">
          <FormInput label="ユーザー名" type="text" placeholder="userName" />
          <FormInput
            label="プロフィール画像"
            type="file"
            placeholder="画像を選択してください"
          />
          <FormInput
            label="メールアドレス"
            type="email"
            placeholder="********@email.com"
          />
          <FormInput
            label="パスワード"
            type="password"
            placeholder="password"
          />
          <FormInput
            label="確認用パスワード"
            type="password"
            placeholder="CheckPassword"
          />
          <FormInput
            label="Twitterアカウント"
            type="url"
            placeholder="https://twitter.com/..."
          />
          <FormInput
            label="Youtubeアカウント"
            type="url"
            placeholder="https://www.youtube.com.channel/..."
          />
          <NewRegisterTextBox
            htmlFor="自己紹介"
            placeholder="こんにちは、〇〇クラン所属のHelloUserです！！"
          />
          <NewRegisterTextBox
            htmlFor="経歴・実績"
            placeholder="〇〇大会優勝
            〇〇大会BEST3"
          />
        </FormControl>
        <ConfirmationBtn
          text="新規登録する"
          colorScheme="purple"
          color="white"
          width="100%"
          confirmation="新規登録"
          handleConfirmation={() => {}}
        />
      </Container>
    </Box>
  );
};

export default newAccount;
