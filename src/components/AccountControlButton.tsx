import { Button } from "@chakra-ui/react";
import React from "react";

export const AccountControlButton = ({
  text,
  colorScheme,
  color,
  width,
}: AccountControlBtnProps) => {
  return (
    <Button colorScheme={colorScheme} variant="solid" color={color} w={width}>
      {text}
    </Button>
  );
};
