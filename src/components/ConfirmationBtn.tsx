import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export const ConfirmationBtn = ({
  text,
  colorScheme,
  color,
  width,
  confirmation,
  handleConfirmation,
  confirmationLink,
}: ConfirmationBtnProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme={colorScheme}
        variant="solid"
        color={color}
        w={width}
        onClick={onOpen}
        >
        {text}
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        size="3xl"
        >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>本当に{confirmation}してよろしいですか？</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}></ModalBody>

          <ModalFooter>
          <Link href={confirmationLink}>
            <Button colorScheme="blue" mr={3} onClick={handleConfirmation}>
              {confirmation}する
            </Button>
          </Link>
            <Button onClick={onClose} colorScheme="red">
              {confirmation}しない
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
