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
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { profileCollectionAtom } from "../lib/recoil/atoms/profileCollectionAtom";
import { reviewStarAtom } from "../lib/recoil/atoms/reviewStarAtom";
import { testLoginUserAtom } from "../lib/recoil/atoms/testLoginUserAtom";
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

    const loginUser = useRecoilValue(testLoginUserAtom)

  const userData = profileCollections.find((profile) => {
    if (profile.userID === userId) {
      return profile;
    }
  });

  const addReview = () => {
      userData?.review.forEach((review: any) => {
        if(loginUser in review){
          Object.assign(review,{[loginUser]: star})
        } else if(!(loginUser in review)){
          userData.review.push({loginUser: star});
        }
      })
    const updateProfileCollections: User[] = [];
    profileCollections.map((profile) => {
      userId === profile.userID && userData
        ? updateProfileCollections.push(userData)
        : updateProfileCollections.push(profile);
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
