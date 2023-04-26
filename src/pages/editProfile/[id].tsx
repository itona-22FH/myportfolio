/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Container, FormControl } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ConfirmationBtn } from "../../components/ConfirmationBtn";
import { FormInput } from "../../components/FormInput";
import { HeadTitle } from "../../components/HeadTitle";
import { NewRegisterTextBox } from "../../components/NewRegisterTextBox";
import userInformationAtom from "../../lib/recoil/atoms/userInformationAtom";
import { profileCollectionAtom } from "../../lib/recoil/atoms/profileCollectionAtom";

const editProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  const [profileCollections, setProfileCollections] = useRecoilState(
    profileCollectionAtom
  );
  const [editUserData, setEditUserData] = useRecoilState(userInformationAtom);

  const myProfileData = profileCollections.find((profile) => {
    if (id === profile.userID) {
      return profile;
    }
  });

  useEffect(() => {
    if (myProfileData) setEditUserData(myProfileData);
  }, [id]);

  const inputEditInformation = (e: {
    target: { name: string; value: string | undefined };
  }) => {
    const { name, value } = e.target;
    setEditUserData((prev) => ({ ...prev, [name]: value }));
  };

  const updateProfileHandle = () => {
    const updateProfileCollections: User[] = [];
    profileCollections.map((profile) => {
      id === profile.userID
        ? updateProfileCollections.push(editUserData)
        : updateProfileCollections.push(profile);
    });
    setProfileCollections(updateProfileCollections);
  };

  return (
    editUserData && (
      <Box pt="10px" pb="10px">
        <Container
          maxW="1100px"
          bg="whiteAlpha.800"
          p="5px"
          borderRadius="10px"
        >
          <HeadTitle title="アカウント情報の編集" />
          <FormControl pt="20px">
            <FormInput
              label="ユーザー名"
              type="text"
              placeholder="userName"
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
            confirmationLink={`/editProfile/${id}`}
          />
        </Container>
      </Box>
    )
  );
};

export default editProfile;
