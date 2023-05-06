/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Container, FormControl, Link } from "@chakra-ui/react";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ConfirmationBtn } from "../../components/ConfirmationBtn";
import { FormInput } from "../../components/FormInput";
import { HeadTitle } from "../../components/HeadTitle";
import { NewRegisterTextBox } from "../../components/NewRegisterTextBox";
import {db} from "../../lib/firebase/firebaseConfig";
import { profileCollectionAtom } from "../../lib/recoil/atoms/profileCollectionAtom";
import { testLoginUserAtom } from "../../lib/recoil/atoms/testLoginUserAtom";

const editProfile = () => {
  //プロフィールコレクションのSTATEの定義
  const profileCollections = useRecoilValue(profileCollectionAtom);

  const loginUser = useRecoilValue(testLoginUserAtom);

  const router = useRouter();
  const { id } = router.query;

  //編集情報の保持のためのSTATEを定義
  const [editUserData, setEditUserData] = useState({
    userName: "",
    userAvatar: "",
    twitterAccount: "",
    youtubeAccount: "",
    selfIntroduction: "",
    achievement: "",
  });

  const profileRef = doc(db, "profileCollection", loginUser);

  //自分のプロフィールデータをコレクションから取得
  const myProfileData = profileCollections.find((profile) => {
    if (loginUser === profile.userId) {
      return profile;
    }
  });

  //取得した自分のプロフィールデータを編集用のSTATEにセット
  useEffect(() => {
    if (myProfileData) setEditUserData(myProfileData);
  }, [loginUser]);

  const inputEditInformation = (e: {
    target: { name: string; value: string | number };
  }) => {
    //inputタグのtargetのnameとvalueを取得
    const { name, value } = e.target;
    //editUserDataが持つ同一のKEY名の値を上書き
    setEditUserData((prev) => ({ ...prev, [name]: value }));
  };

  const updateProfileHandle = async () => {
    await updateDoc(profileRef, {
      userName: editUserData.userName,
      userAvatar: editUserData.userAvatar,
      twitterAccount: editUserData.twitterAccount,
      youtubeAccount: editUserData.youtubeAccount,
      selfIntroduction: editUserData.selfIntroduction,
      achievement: editUserData.achievement,
    });
  };

  return editUserData && loginUser === id ? (
    <Box pt="10px" pb="10px">
      <Container maxW="1100px" bg="whiteAlpha.800" p="5px" borderRadius="10px">
        <HeadTitle title="アカウント情報の編集" />
        <FormControl pt="20px">
          <FormInput
            label="ユーザー名"
            type="text"
            placeholder="ユーザー名を入力してください"
            formName="userName"
            onChangeHandle={inputEditInformation}
            formValue={editUserData.userName}
          />
          <FormInput
            label="プロフィール画像"
            type="file"
            placeholder="画像を選択してください"
            formName={"userAvatar"}
            onChangeHandle={inputEditInformation}
            formValue={""}
          />
          <FormInput
            label="Twitterアカウント"
            type="url"
            placeholder="https://twitter.com/..."
            formName={"twitterAccount"}
            onChangeHandle={inputEditInformation}
            formValue={editUserData.twitterAccount}
          />
          <FormInput
            label="Youtubeアカウント"
            type="url"
            placeholder="https://www.youtube.com.channel/..."
            formName={"youtubeAccount"}
            onChangeHandle={inputEditInformation}
            formValue={editUserData.youtubeAccount}
          />
          <NewRegisterTextBox
            htmlFor="自己紹介"
            placeholder="こんにちは、〇〇クラン所属のHelloUserです！！"
            textBoxName={"selfIntroduction"}
            onChangeHandle={inputEditInformation}
            textBoxValue={editUserData.selfIntroduction}
          />
          <NewRegisterTextBox
            htmlFor="経歴・実績"
            placeholder="〇〇大会優勝 〇〇大会BEST3"
            textBoxName={"achievement"}
            onChangeHandle={inputEditInformation}
            textBoxValue={editUserData.achievement}
          />
        </FormControl>
        <ConfirmationBtn
          text="更新する"
          colorScheme="purple"
          color="white"
          width="100%"
          confirmation="アカウント情報を更新"
          handleConfirmation={updateProfileHandle}
          confirmationLink="/"
        />
      </Container>
    </Box>
  ) : (
    <>
      <Box>プロフィール情報を取得できませんでした。</Box>
      <Link href="/">トップへもどる</Link>
    </>
  );
};

export default editProfile;
