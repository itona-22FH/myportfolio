import { Avatar, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import { testLoginUserAtom } from "../lib/recoil/atoms/testLoginUserAtom";
import { ReviewStatus } from "./ReviewStatus";

export const UserInformation = ({
  userID,
  userName,
  userAvatar,
  reviewCount,
  reviewScore,
}: UserInformationProps) => {
  const router = useRouter();
  const { pathname } = router;

  const loginUserId = useRecoilValue(testLoginUserAtom);

  return (
    <>
      {/* プランページで表示する場合はリンク機能をもたせる、プロフィールまたは、マイページの場合はリンクなし */}
      {pathname.includes("plan") ? (
        <Link
          href={
            loginUserId === userID
              ? `/myPage/${loginUserId}`
              : `/profile/${userID}`
          }
          borderRadius="100px"
        >
          <Avatar size="2xl" name={userName} src={userAvatar} />
        </Link>
      ) : (
        <>
          <Avatar size="2xl" name={userName} src={userAvatar} />
        </>
      )}
      {pathname.includes("plan") ? (
        <Link
          href={
            loginUserId === userID
              ? `/myPage/${loginUserId}`
              : `/profile/${userID}`
          }
          mt="10px"
          fontSize="35px"
        >
          {userName}
        </Link>
      ) : (
        <>
          <Text mt="10px" fontSize="35px">
            {userName}
          </Text>
        </>
      )}
      <ReviewStatus reviewCount={reviewCount} reviewScore={reviewScore} />
    </>
  );
};
