import { Avatar, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export const UserInformation = ({
  userID,
  testUserId,
  userName,
  userAvatar,
}: any) => {
  const router = useRouter();
  const { id } = router.query;
  const { pathname } = router;
  console.log(id, pathname);

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
    </>
  );
};
