import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Image,
  Divider,
  ButtonGroup,
  Button,
  Link,
  Box,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  WrapItem,
  Wrap,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const GamePlan = () => {
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
    <Link>
      <Box
        maxW="xs"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        ml="10px"
        mt="10px"
      >
        <Image src={property.imageUrl} alt={property.imageAlt} />

        <Box p="6">
          <Box
            mt="1"
            fontWeight="bold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {property.title}
          </Box>
          <Flex alignItems="center" mt="4" mb="4">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Text ml="3" lineHeight="1" verticalAlign="center">
              momotarou
            </Text>
          </Flex>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box>

          <Box>
            {property.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              円
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
