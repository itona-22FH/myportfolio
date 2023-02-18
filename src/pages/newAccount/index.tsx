/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import {
  Box,
  FormControl,
  Heading,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { AccountControlButton } from "../../components/AccountControlButton";
import { FormInput } from "../../components/FormInput";
import { MyPageTextBox } from "../../components/MyPageTextBox";

const newAccount = () => {
  return (
    <Box p="10">
      <Container maxW="800px" bg="whiteAlpha.800" p="5" borderRadius="10px">
        <Heading as="h2" size="2xl" color="purple" mb="10" pt="5">
          新規登録
        </Heading>
        <FormControl>
          <FormInput label="ユーザー名" type="text" placeholder="username" />
          <FormInput label="プロフィール画像" type="file" placeholder="画像を選択してください" />
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
            label="Twitterアカウント"
            type="url"
            placeholder="https://twitter.com/..."
          />
          <FormInput
            label="Youtubeアカウント"
            type="url"
            placeholder="https://www.youtube.com.channel/..."
          />
          <MyPageTextBox
            htmlFor="自己紹介"
            placeholder="こんにちは、〇〇クラン所属のHelloUserです！！"
          />
          <MyPageTextBox
            htmlFor="経歴・実績"
            placeholder="〇〇大会優勝
            〇〇大会BEST3"
          />
        </FormControl>
        <AccountControlButton
            text="新規登録する"
            colorScheme="purple"
            color="white"
            width="100%"
            />      </Container>
    </Box>
  );
};

export default newAccount;
