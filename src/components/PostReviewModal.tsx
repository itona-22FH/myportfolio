/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  Link,
  Box,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { profileCollectionAtom } from "../lib/recoil/atoms/profileCollectionAtom";
import { reviewStarAtom } from "../lib/recoil/atoms/reviewStarAtom";
import { testLoginUserAtom } from "../lib/recoil/atoms/testLoginUserAtom";
import { SelectReviewStar } from "./SelectReviewStar";
import accountInformationAtom from "../lib/recoil/atoms/accountInformationAtom";

export const PostReviewModal = ({
  text,
  colorScheme,
  color,
  width,
  userId,
}: PostReviewModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [profileCollections, setProfileCollections] = useRecoilState(
    profileCollectionAtom
  );

  //レビュースコアを取得
  const [star, setStar] = useRecoilState(reviewStarAtom);
  console.log(star)


  //レビューをするユーザーIDを取得
  const loginUser = useRecoilValue(testLoginUserAtom);

  const [updateReviewData, setUpdateReviewData] = useRecoilState(
    accountInformationAtom
  );
  //レビューされるユーザーのデータを取得
  const userData = profileCollections.find((profile) => {
    if (profile.userID === userId) {
      return profile;
    }
  });

  useEffect(() => {
    if (userData) setUpdateReviewData(userData);
  }, []);
  
  const postReview = () => {
    console.log(star)
    setUpdateReviewData((prev) => ({
      ...prev,
      review: { ...prev.review, [loginUser]: star },
    }));
  };

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

  const updateProfileCollections: User[] = []; //profileCollections更新のための配列定義
  profileCollections.map((profile) => {
    userId === profile.userID && userData //レビュー対象のユーザー？
      ? updateProfileCollections.push(updateReviewData) //レビュー情報を更新したデータを追加
      : updateProfileCollections.push(profile); //現在のデータをそのまま追加
  });
  setProfileCollections(updateProfileCollections);
  setStar(0);
}, [updateReviewData])


  return (
    <>
      <Button
        colorScheme={colorScheme}
        variant="solid"
        color={color}
        w={width}
        onClick={onOpen}
      >
        {text}
      </Button>

      {/* ログインボタンが押された時に表示するモーダル */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>メンターの指導はどうでしたか？</ModalHeader>
          <ModalCloseButton />
          <Flex alignItems="center" justifyContent="center">
            <SelectReviewStar />
          </Flex>
          <ModalFooter>
            <Link>
              <Button colorScheme="blue" mr="10px" onClick={postReview}>
                投稿する
              </Button>
            </Link>
            <Button onClick={onClose} colorScheme="red">
              キャンセル
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
