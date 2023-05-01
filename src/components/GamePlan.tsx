import React from "react";
import { Text, Image, Link, Box, Avatar, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReviewStatus } from "./ReviewStatus";
import { Badge } from "@chakra-ui/react";

export const GamePlan = ({ showPlan }: GamePlanProps) => {
  //URLからpathnameを取得
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      {/* showGamePlanAtomにセットされた配列を表示 */}
      {showPlan.map(
        ({
          planId,
          planTitle,
          planImage,
          userName,
          price,
          userAvatar,
          review,
          titleCategory,
          genreCategory,
        }) => (
          <Link
            key={planId as string}
            href={`/plan/${planId}`}
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
                <Badge bg="purple.200" mr="5px">
                  {genreCategory}
                </Badge>
                <Badge bg="purple.200">{titleCategory}</Badge>
                {pathname === "/" && ( //トップページ表示中？
                  <>
                    <Flex alignItems="center" mt="4" mb="4">
                      <Avatar name={userName} src={userAvatar} />
                      <Text ml="3" lineHeight="1" verticalAlign="center">
                        {userName}
                      </Text>
                    </Flex>
                    <ReviewStatus review={review} />
                  </>
                )}

                <Box mt="3" color="red">
                  {Number(price).toLocaleString()}
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
