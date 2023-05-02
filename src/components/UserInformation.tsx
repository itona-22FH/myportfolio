import { Avatar, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import { testLoginUserAtom } from "../lib/recoil/atoms/testLoginUserAtom";
import { ReviewStatus } from "./ReviewStatus";

export const UserInformation = ({
  userId,
  userName,
  userAvatar,
  review,
}: UserInformationProps) => {
  const router = useRouter();
  const { pathname } = router;

  const loginUserId = useRecoilValue(testLoginUserAtom);

  return (
    <>
      {/*プランページにいる？ */}
      {pathname.includes("plan") ? (
        <>
          {/* プランページの場合はリンク機能追加
              ユーザー本人の場合はマイページ
              異なる場合は、プロフィールページへ遷移
          */}
          <Link
            href={
              loginUserId === userId
                ? `/myPage/${loginUserId}`
                : `/profile/${userId}`
            }
            borderRadius="100px"
          >
            <Avatar size="2xl" name={userName} src={userAvatar} />
          </Link>
        </>
      ) : (
        <>
          <Avatar size="2xl" name={userName} src={userAvatar} />
        </>
      )}
      {pathname.includes("plan") ? (
        <>
          {/* プランページ表示の場合はリンク機能追加
              ログイン中のユーザーのユーザー名の場合はマイページ
              異なる場合は、プロフィールページへ遷移
          */}
          <Link
            href={
              loginUserId === userId
                ? `/myPage/${loginUserId}`
                : `/profile/${userId}`
            }
            mt="10px"
            fontSize="35px"
          >
            {userName}
          </Link>
        </>
      ) : (
        <>
          <Text mt="10px" fontSize="35px">
            {userName}
          </Text>
        </>
      )}
      <ReviewStatus review={review} />
    </>
  );
};
