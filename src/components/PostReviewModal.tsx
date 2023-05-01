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
import React, { useState } from "react";
import ReactStars from "react-stars";
import { useRecoilState, useRecoilValue } from "recoil";
import { profileCollectionAtom } from "../lib/recoil/atoms/profileCollectionAtom";
import { testLoginUserAtom } from "../lib/recoil/atoms/testLoginUserAtom";

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
const [profileCollections, setProfileCollections] = useRecoilState(profileCollectionAtom)
const loginUser = useRecoilValue(testLoginUserAtom)

  //レビュースコアを取得
  const [star, setStar] = useState(0);

  const postReview = () => {
    profileCollections.map((profile) => {
      userId === profile.userId  //レビュー対象のユーザー？
      ? setProfileCollections((prev) =>
          prev.map((obj) =>
            obj.userId === profile.userId ?{ ...obj, review: { ...obj.review, [loginUser]: star } }: obj
          )
        ) //レビューデータ更新したデータ
      : setProfileCollections((prev) => prev); //現在のデータをそのまま追加
    });
    setStar(0);
  };

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
