import { Button, Link } from "@chakra-ui/react";
import React from "react";

export const AccountControlButton = ({
  text,
  colorScheme,
  color,
  width,
  href,
}: AccountControlBtnProps) => {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Button colorScheme={colorScheme} variant="solid" color={color} w={width}>
        {text}
      </Button>
    </Link>
  );
};
