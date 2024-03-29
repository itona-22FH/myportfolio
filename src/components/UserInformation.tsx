import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import { testLoginUserAtom } from "../lib/recoil/atoms/testLoginUserAtom";
import { ReviewStatus } from "./ReviewStatus";
import { IoLogoYoutube, IoLogoTwitter } from "react-icons/io";

export const UserInformation = ({
  userId,
  userName,
  userAvatar,
  review,
  twitterUrl,
  youtubeUrl,
  contactEmail,
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
            fontSize="35px"
          >
            {userName}
          </Link>
          <Box mb="5px"><span>連絡先：</span>{contactEmail}</Box>
          <Flex>
            <Link href={twitterUrl}>
              <IoLogoTwitter size="20px" color="#1DA1F2" />
            </Link>
            <Box ml="20px"></Box>
            <Link href={youtubeUrl}>
              <IoLogoYoutube size="20px" color="#ff0000" />
            </Link>
          </Flex>
        </>
      ) : (
        <>
          <Text fontSize="35px">{userName}</Text>
          <Box mb="5px"><span>連絡先：</span>{contactEmail}</Box>
          <Flex>
            <Link href={twitterUrl}>
              <IoLogoTwitter size="20px" color="#1DA1F2" />
            </Link>
            <Box ml="20px"></Box>
            <Link href={youtubeUrl}>
              <IoLogoYoutube size="20px" color="#ff0000" />
            </Link>
          </Flex>
        </>
      )}
      <ReviewStatus review={review} />
    </>
  );
};
