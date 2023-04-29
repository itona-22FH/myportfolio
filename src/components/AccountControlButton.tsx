import { Avatar, Button, Link } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { profileCollectionAtom } from "../lib/recoil/atoms/profileCollectionAtom";
import { testLoginUserAtom } from "../lib/recoil/atoms/testLoginUserAtom";

export const AccountControlButton = ({
  text,
  colorScheme,
  color,
  width,
  href,
}: AccountControlBtnProps) => {
  const loginUser = useRecoilValue(testLoginUserAtom);
  const profileCollections = useRecoilValue(profileCollectionAtom);

  const userData = profileCollections.find((profile) => {
    if (loginUser === profile.userID) {
      return profile;
    }
  });

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Button colorScheme={colorScheme} variant="solid" color={color} w={width}>
        {text === "マイページ" ? (
          <Avatar
            size="xs"
            name={userData?.userName}
            src={userData?.userAvatar}
          />
        ) : (
          ""
        )}
        {text}
      </Button>
    </Link>
  );
};
