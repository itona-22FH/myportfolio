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
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import ReactStars from "react-stars";
import { useRecoilState, useRecoilValue } from "recoil";
import { db } from "../lib/firebase/firebaseConfig";
import { profileCollectionAtom } from "../lib/recoil/atoms/profileCollectionAtom";
import { testLoginUserAtom } from "../lib/recoil/atoms/testLoginUserAtom";

export const PostReviewModal = ({
  text,
  colorScheme,
  color,
  width,
  userId,
}: PostReviewModalProps) => {
  //モーダル関数
  const { isOpen, onOpen, onClose } = useDisclosure();

  //プロフィールデータ取得
  const profileCollections = useRecoilValue(profileCollectionAtom);

  //レビュースコアを取得
  const [star, setStar] = useState(0);

  const profileRef = doc(db, "profileCollection", userId as string);

  //ログイン中のユーザー
  const loginUserId = useRecoilValue(testLoginUserAtom);

  const postReview = async () => {
    const reviewUser = profileCollections.find((profile) => {
      if (userId === profile.userId) {
        return profile;
      }
    });
    if (reviewUser) {
      const updateReview = {
        ...reviewUser,
        review: { ...reviewUser?.review, [loginUserId]: star },
      };
      await updateDoc(profileRef, {
        review: updateReview.review,
      });
    }
    setStar(0);
  };
  //星の選択
  const ratingChanged = (star: number) => {
    setStar(star);
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
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>メンターの指導はどうでしたか？</ModalHeader>
          <ModalCloseButton />
          <Flex alignItems="center" justifyContent="center">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={30}
              color2={"#ffa500"}
              color1={"#808080"}
              value={star}
            />
          </Flex>
          <ModalFooter>
            <Link href="/">
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
