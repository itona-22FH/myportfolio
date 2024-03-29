/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Container, FormControl, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ConfirmationBtn } from "../../components/ConfirmationBtn";
import { FormInput } from "../../components/FormInput";
import { HeadTitle } from "../../components/HeadTitle";
import { NewRegisterTextBox } from "../../components/NewRegisterTextBox";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../lib/firebase/firebaseConfig";
import { testLoginUserAtom } from "../../lib/recoil/atoms/testLoginUserAtom";
import { useRecoilValue } from "recoil";

const newPlan = () => {
  //URLからUSERのIDを取得
  const router = useRouter();
  const { id } = router.query;

  const loginUserId = useRecoilValue(testLoginUserAtom);

  //新プラン情報保持のためのStateを定義
  const [newPlanData, setNewPlanData] = useState({
    userId: "",
    planTitle: "",
    planImage: "https://bit.ly/2Z4KKcF",
    study: "",
    guidance: "",
    titleCategory: "",
    genreCategory: "",
    price: "",
  });

  //初回レンダリング時とid取得時にsetNewPlanData関数を発火
  useEffect(() => {
    if (!router.isReady) return;
    //planIDプロパティとuserIDプロパティにそれぞれIDをセット
    setNewPlanData((prev) => ({ ...prev, userId: loginUserId }));
  }, [id]);

  const inputPlanInformation = (e: {
    target: { name: string; value: string | number };
  }) => {
    //inputタグのtargetのnameとvalueを取得
    const { name, value } = e.target;
    //newPlanDataが持つ同一のKEY名の値を上書き
    setNewPlanData((prev) => ({ ...prev, [name]: value }));
  };

  const addNewPlanHandle = async () => {
    //プラン情報を保持したnewPlanDataをPlanCollectionsに加える
    await addDoc(collection(db, "planCollection"), {
      userId: newPlanData.userId,
      planTitle: newPlanData.planTitle,
      planImage: newPlanData.planImage,
      price: newPlanData.price,
      study: newPlanData.study,
      guidance: newPlanData.guidance,
      titleCategory: newPlanData.titleCategory,
      genreCategory: newPlanData.genreCategory,
    });
    router.push("/");
  };

  return (
    loginUserId === id && (
      <Box pt="10px" pb="10px">
        <Container
          maxW="1100px"
          bg="whiteAlpha.800"
          p="5px"
          borderRadius="10px"
        >
          <HeadTitle title="新規プラン登録" />
          <FormControl pt="20px">
            <FormInput
              label="プラン名"
              type="text"
              placeholder="プラン名を入力してください"
              formName="planTitle"
              onChangeHandle={inputPlanInformation}
              formValue={newPlanData.planTitle}
            />
            <FormInput
              label="プランサムネイル"
              type="file"
              placeholder="画像を選択してください"
              formName="planImage"
              onChangeHandle={inputPlanInformation}
              formValue={""}
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
              <option value="ポケモン">ポケモン</option>
              <option value="COD">COD</option>
              <option value="鉄拳">鉄拳</option>
              <option value="NBA">NBA</option>
              <option value="バトルフィールド">バトルフィールド</option>
              <option value="フォートナイト">フォートナイト</option>
              <option value="オーバーウォッチ２">オーバーウォッチ２</option>
            </Select>
            <FormInput
              label="プラン料金"
              type="number"
              placeholder="planPrice"
              formName="price"
              onChangeHandle={inputPlanInformation}
              formValue={newPlanData.price}
            />
            <NewRegisterTextBox
              htmlFor="学べる内容"
              placeholder="勝つために必要なこと全て！！！エイム力UP、敵を圧倒する立ち回り、得意キャラをさらに極める！！私がすべて教えます！！！"
              textBoxName="study"
              onChangeHandle={inputPlanInformation}
              textBoxValue={newPlanData.study}
            />
            <NewRegisterTextBox
              htmlFor="指導方法"
              placeholder="動画１本１０００円！（１試合15分想定）"
              textBoxName="guidance"
              onChangeHandle={inputPlanInformation}
              textBoxValue={newPlanData.guidance}
            />
          </FormControl>
          <ConfirmationBtn
            text="新規プラン登録する"
            colorScheme="purple"
            color="white"
            width="100%"
            confirmation="プランを登録"
            handleConfirmation={addNewPlanHandle}
          />
        </Container>
      </Box>
    )
  );
};
export default newPlan;
