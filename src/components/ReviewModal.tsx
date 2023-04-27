/* eslint-disable react-hooks/rules-of-hooks */
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { profileCollectionAtom } from "../lib/recoil/atoms/profileCollectionAtom";
import { reviewStarAtom } from "../lib/recoil/atoms/reviewStarAtom";
import { StarRating } from "./StarRating";

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
  const profileCollections = useRecoilValue(profileCollectionAtom);
  const [star, setStar] = useRecoilState(reviewStarAtom);

  const userData = profileCollections.find((profile) => {
    if (profile.userID === userId) {
      return profile;
    }
  });

  const addReview = () => {
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
            <Button colorScheme="blue" mr="10px" onClick={addReview}>
              投稿する
            </Button>
            <Button onClick={onClose} colorScheme="red">
              キャンセル
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
