import { Box, Container, FormControl, Select } from "@chakra-ui/react";
import React from "react";
import { AccountControlButton } from "../../components/AccountControlButton";
import { ConfirmationBtn } from "../../components/ConfirmationBtn";
import { FormInput } from "../../components/FormInput";
import { HeadTitle } from "../../components/HeadTitle";
import { MyPageTextBox } from "../../components/MyPageTextBox";

const newPlan = () => {
  return (
    <Box pt="10px" pb="10px">
      <Container maxW="1100px" bg="whiteAlpha.800" p="5px" borderRadius="10px">
        <HeadTitle title="新規プラン登録" />
        <FormControl pt="20px">
          <FormInput label="プラン名" type="text" placeholder="planName" />
          <FormInput
            label="プランサムネイル"
            type="file"
            placeholder="画像を選択してください"
          />
          <Select
            placeholder="ジャンル"
            w="300px"
            borderColor="purple.300"
            pt="10px"
            pb="10px"
          >
            <option value="option1">FPS・TPS</option>
            <option value="option2">MOBA</option>
            <option value="option3">格闘</option>
            <option value="option4">スポーツ</option>
          </Select>

          <Select
            placeholder="タイトル"
            w="300px"
            borderColor="purple.300"
            pt="10px"
            pb="10px"
          >
            <option value="option1">エーペックスレジェンズ</option>
            <option value="option2">ストリートファイター</option>
            <option value="option3">リーグ・オブ・レジェンド</option>
            <option value="option4">FIFA</option>
          </Select>
          <FormInput label="プラン料金" type="number" placeholder="planPrice" />
          <MyPageTextBox
            htmlFor="学べる内容"
            placeholder="勝つために必要なこと全て！！！エイム力UP、敵を圧倒する立ち回り、得意キャラをさらに極める！！私がすべて教えます！！！"
          />
          <MyPageTextBox
            htmlFor="指導方法"
            placeholder="動画１本１０００円！（１試合15分想定）"
          />
        </FormControl>
        <ConfirmationBtn
          text="新規プラン登録する"
          colorScheme="purple"
          color="white"
          width="100%"
          confirmation="プランを登録"
        />
      </Container>
    </Box>
  );
};

export default newPlan;
