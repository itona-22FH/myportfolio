import { Button } from "@chakra-ui/react";
import React from "react";

export const ContractBtn = ({
  text,
  colorScheme,
  color,
  width,
  onClick,
}: ContractBtnProps) => {
  return (
    <>
      <Button
        onClick={onClick}
        colorScheme={colorScheme}
        variant="solid"
        color={color}
        w={width}
      >
        {text}
      </Button>
    </>
  );
};
