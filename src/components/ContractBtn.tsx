import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const ContractBtn = ({ text, colorScheme, color, width, onClick }: ContractBtnProps) => {
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

export default ContractBtn;
