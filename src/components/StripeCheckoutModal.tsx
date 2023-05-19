import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export const StripeCheckoutModal = ({ planData }: StripeCheckoutModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        colorScheme="purple"
        variant="solid"
        color="white"
        w="100%"
        onClick={onOpen}
      >
        プランを契約する
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>本当に契約してよろしいですか？</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}></ModalBody>
          <ModalFooter>
            <form
              action={`http://localhost:3000/api/stripeCheckoutSession/${planData.planTitle}/${planData.price}`}
              method="post"
            >
              <Button colorScheme="blue" mr={3} type="submit">
                契約する
              </Button>
            </form>
            <Button onClick={onClose} colorScheme="red">
              契約しない
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
