import { Avatar, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { ReviewStatus } from "./ReviewStatus";

export const UserInformation = ({
  userID,
  testUserId,
  userName,
  userAvatar,
  reviewCount,
  reviewScore,
}: UserInformationProps) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      {pathname.includes("plan") ? (
        <Link
          href={
            testUserId === userID
              ? `/myPage/${testUserId}`
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
            testUserId === userID
              ? `/myPage/${testUserId}`
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
