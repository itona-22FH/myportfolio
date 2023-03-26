import React from "react";
import { Text, Image, Link, Box, Avatar, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useRecoilValue } from "recoil";
import { planCollectionAtom } from "../components/atoms/planCollectionAtom";

export const GamePlan = () => {
  const planCollections = useRecoilValue(planCollectionAtom);

  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "1,900",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <>
      {planCollections.map(
        ({ userID, planTitle, planImage, userName, Guidance, price, userAvatar, reviewCount, reviewScore}) => (
          <Link key={userID} href="/plan" style={{ textDecoration: "none" }}>
            <Box
              maxW="xs"
              borderWidth="1px"
              borderRadius="lg"
              borderColor="purple.300"
              overflow="hidden"
              ml="10px"
              mt="10px"
              mb="10px"
            >
              <Image src={planImage} alt={property.imageAlt} />

              <Box p="3">
                <Box
                  mt="1"
                  fontWeight="bold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {planTitle}
                </Box>
                <Flex alignItems="center" mt="4" mb="4">
                  <Avatar name="Dan Abrahmov" src={userAvatar} />
                  <Text ml="3" lineHeight="1" verticalAlign="center">
                    {userName}
                  </Text>
                </Flex>

                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < reviewScore/reviewCount ? "orange" : "gray.200"}
                      />
                    ))}
                  <Box as="span" ml="2" color="gray" fontSize="sm">
                    {reviewCount} reviews
                  </Box>
                </Box>

                <Box mt="3" color="red">
                  {price}
                  <Box as="span" color="black" fontSize="sm">
                    円
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
        )
      )}
    </>
  );
};
