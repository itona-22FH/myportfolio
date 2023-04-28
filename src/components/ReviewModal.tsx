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
import userInformationAtom from "../lib/recoil/atoms/userInformationAtom";
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
  const [profileCollections, setProfileCollections] = useRecoilState(
    profileCollectionAtom
  );
  const star = useRecoilValue(reviewStarAtom);
  const [updateUserReviewData, setUpdateUserReviewData] =
    useRecoilState(userInformationAtom);

  const userData = profileCollections.find((profile) => {
    if (profile.userID === userId) {
      return profile;
    }
  });

  useEffect(() => {
    if (userData) setUpdateUserReviewData(userData);
  }, []);

  // const addReview = () => {
  //   setUpdateUserReviewData((prev) => ({
  //     ...prev,
  //     reviewCount: prev.reviewCount + 1,
  //     reviewScore: prev.reviewScore + star,
  //   }));
  //   const updateProfileCollections: User[] = [];
  //   profileCollections.map((profile) => {
  //     userId === profile.userID
  //       ? updateProfileCollections.push(updateUserReviewData)
  //       : updateProfileCollections.push(profile);
  //   });
  //   setProfileCollections(updateProfileCollections);
  // };

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
            {/* <Link href="/"> */}
            {/* <Button colorScheme="blue" mr="10px" onClick={addReview}>
              投稿する
            </Button> */}
            {/* </Link> */}
            <Button onClick={onClose} colorScheme="red">
              キャンセル
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
