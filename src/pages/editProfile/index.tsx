import { Box, Container, FormControl } from "@chakra-ui/react";
import React from "react";
import { ConfirmationBtn } from "../../components/ConfirmationBtn";
import { FormInput } from "../../components/FormInput";
import { HeadTitle } from "../../components/HeadTitle";
import { MyPageTextBox } from "../../components/MyPageTextBox";

const editProfile = () => {
  return (
    <Box pt="10px" pb="10px">
      <Container maxW="1100px" bg="whiteAlpha.800" p="5px" borderRadius="10px">
        <HeadTitle title="アカウント情報の編集" />
        <FormControl pt="20px">
          <FormInput label="ユーザー名" type="text" placeholder="userName" />
          <FormInput
            label="プロフィール画像"
            type="file"
            placeholder="画像を選択してください"
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
        <ConfirmationBtn
          text="更新する"
          colorScheme="purple"
          color="white"
          width="100%"
          confirmation="アカウント情報を更新"
        />
      </Container>
    </Box>
  );
};

export default editProfile;
