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

  const postStripe = async () => {
    try {
      await fetch("http://localhost:3000/api/stripeCheckoutSession", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          planTitle: planData.planTitle,
          price: planData.price,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

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
            <Button colorScheme="blue" mr={3} onClick={postStripe}>
              契約する
            </Button>
            <Button onClick={onClose} colorScheme="red">
              契約しない
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
