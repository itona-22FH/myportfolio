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
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { profileCollectionAtom } from "../lib/recoil/atoms/profileCollectionAtom";
import { reviewStarAtom } from "../lib/recoil/atoms/reviewStarAtom";
import { testLoginUserAtom } from "../lib/recoil/atoms/testLoginUserAtom";
import { StarRating } from "./StarRating";
import accountInformationAtom from "../lib/recoil/atoms/accountInformationAtom";

export const ReviewModal = ({
  text,
  colorScheme,
  color,
  width,
  userId,
}: ReviewModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [profileCollections, setProfileCollections] = useRecoilState(
    profileCollectionAtom
  );
  //レビュースコアを取得
  const star = useRecoilValue(reviewStarAtom);

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

  const addReview = () => {
    console.log(updateReviewData);
    setUpdateReviewData((prev) => ({
      ...prev,
      review: [...prev.review, {[loginUser]: star}],
    }));
    console.log(updateReviewData);
    const updateProfileCollections: User[] = []; //profileCollections更新のための配列定義
    profileCollections.map((profile) => {
      userId === profile.userID && userData //レビュー対象のユーザー？
        ? updateProfileCollections.push(updateReviewData) //レビュー情報を更新したデータを追加
        : updateProfileCollections.push(profile); //現在のデータをそのまま追加
    });
    setProfileCollections(updateProfileCollections);
  };

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
          <StarRating />
          <ModalFooter>
            <Link>
              <Button colorScheme="blue" mr="10px" onClick={addReview}>
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
