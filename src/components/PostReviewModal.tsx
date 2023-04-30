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

  //レビューをするユーザーIDを取得
  const loginUser = useRecoilValue(testLoginUserAtom);

  //レビュー情報更新のためのデータ格納STATE
  const [updateReviewData, setUpdateReviewData] = useRecoilState(
    accountInformationAtom
  );

  //useEffect制御のための変数
  const isFirstRender = useRef(true);

  //レビューされるユーザーのデータを取得
  const userData = profileCollections.find((profile) => {
    if (profile.userID === userId) {
      return profile;
    }
  });

  //初回更新対象のユーザーデータをセット
  useEffect(() => {
    if (userData) setUpdateReviewData(userData);
  }, []);

  //投稿ボタン押下時、対象のレビューデータを更新
  const postReview = () => {
    setUpdateReviewData((prev) => ({
      ...prev,
      review: { ...prev.review, [loginUser]: star },
    }));
  };

  useEffect(() => {
    //初回レンダリング時は処理を走らせないように制御
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    profileCollections.map((profile) => {
      userId === profile.userID && userData //レビュー対象のユーザー？
        ? setProfileCollections((prev) =>
            prev.map((obj) =>
              obj.userID === profile.userID ? updateReviewData : obj
            )
          ) //レビューデータ更新したデータ
        : setProfileCollections((prev) => prev); //現在のデータをそのまま追加
    });
    setStar(0);
  }, [updateReviewData]);

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
