import React from "react";
import { Text, Image, Link, Box, Avatar, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useRecoilValue } from "recoil";
import { showGamePlanAtom } from "../lib/recoil/atoms/showGamePlanAtom";
import { useRouter } from "next/router";

export const GamePlan = () => {
  const showGamePlan = useRecoilValue(showGamePlanAtom);

  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      {/* showGamePlanAtomにセットされた配列を表示 */}
      {showGamePlan.map(
        ({
          planID,
          userID,
          planTitle,
          planImage,
          userName,
          guidance,
          price,
          userAvatar,
          reviewCount,
          reviewScore,
        }) => (
          <Link
            key={planID}
            href={`/plan/${planID}`}
            style={{ textDecoration: "none" }}
          >
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
              <Image src={planImage} alt="PlanImage" />

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
                {pathname === "/" && (
                  <>
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
                        color={
                          i < reviewScore / reviewCount
                          ? "orange"
                          : "gray.200"
                        }
                        />
                        ))}
                    <Box as="span" ml="2" color="gray" fontSize="sm">
                      {reviewCount} reviews
                    </Box>
                  </Box>
                        </>
                )}

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
