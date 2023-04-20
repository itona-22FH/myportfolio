/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Container, FormControl, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ConfirmationBtn } from "../../components/ConfirmationBtn";
import { FormInput } from "../../components/FormInput";
import { HeadTitle } from "../../components/HeadTitle";
import { NewRegisterTextBox } from "../../components/NewRegisterTextBox";
import newPlanRegisterAtom from "../../lib/recoil/atoms/newPlanRegisterAtom";
import { planCollectionAtom } from "../../lib/recoil/atoms/planCollectionAtom";
import { profileCollectionAtom } from "../../lib/recoil/atoms/profileCollectionAtom";
import { v4 as uuidv4 } from "uuid";

const newPlan = () => {
  const [planCollections, setPlanCollections] =
    useRecoilState(planCollectionAtom);

  const [newPlanData, setNewPlanData] = useRecoilState(newPlanRegisterAtom);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    setNewPlanData((prev) => ({ ...prev, userID: id, planID: uuidv4() }));
    console.log(newPlanData);
  }, [id]);

  const inputPlanInformation = (e: {
    target: { name: string; value: string | number };
  }) => {
    const { name, value } = e.target;
    setNewPlanData((prev) => ({ ...prev, [name]: value }));
  };

  const addNewPlanHandle = () => {
    setPlanCollections((prev) => [...prev, newPlanData]);
  };

  return (
    <Box pt="10px" pb="10px">
      <Container maxW="1100px" bg="whiteAlpha.800" p="5px" borderRadius="10px">
        <HeadTitle title="新規プラン登録" />
        <FormControl pt="20px">
          <FormInput
            label="プラン名"
            type="text"
            placeholder="プラン名を入力してください"
            formName="planTitle"
            onChangeHandle={inputPlanInformation}
          />
          <FormInput
            label="プランサムネイル"
            type="file"
            placeholder="画像を選択してください"
            formName="planImage"
            onChangeHandle={inputPlanInformation}
          />
          <Select
            placeholder="ジャンル"
            w="300px"
            borderColor="purple.300"
            pt="10px"
            pb="10px"
            onChange={inputPlanInformation}
            name="genreCategory"
          >
            <option value="FPS・TPS">FPS・TPS</option>
            <option value="MOBA">MOBA</option>
            <option value="格闘">格闘</option>
            <option value="スポーツ">スポーツ</option>
          </Select>

          <Select
            placeholder="タイトル"
            w="300px"
            borderColor="purple.300"
            pt="10px"
            pb="10px"
            onChange={inputPlanInformation}
            name="titleCategory"
          >
            <option value="エーペックスレジェンズ">
              エーペックスレジェンズ
            </option>
            <option value="ストリートファイター">ストリートファイター</option>
            <option value="リーグ・オブ・レジェンド">
              リーグ・オブ・レジェンド
            </option>
            <option value="FIFA">FIFA</option>
          </Select>

          <FormInput
            label="プラン料金"
            type="number"
            placeholder="planPrice"
            formName="price"
            onChangeHandle={inputPlanInformation}
          />
          <NewRegisterTextBox
            htmlFor="学べる内容"
            placeholder="勝つために必要なこと全て！！！エイム力UP、敵を圧倒する立ち回り、得意キャラをさらに極める！！私がすべて教えます！！！"
            textBoxName="study"
            onChangeHandle={inputPlanInformation}
          />
          <NewRegisterTextBox
            htmlFor="指導方法"
            placeholder="動画１本１０００円！（１試合15分想定）"
            textBoxName="guidance"
            onChangeHandle={inputPlanInformation}
          />
        </FormControl>
        <ConfirmationBtn
          text="新規プラン登録する"
          colorScheme="purple"
          color="white"
          width="100%"
          confirmation="プランを登録"
          handleConfirmation={addNewPlanHandle}
          confirmationLink="/"
        />
      </Container>
    </Box>
  );
};

export default newPlan;
