import { Box, Divider, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { NewsContext } from "../../context/NewsContext";

const SideCard = () => {
  const { sideCard } = useContext(NewsContext);

  const [position, setPosition] = useState("static");
  const [positionTopMargin, setPositionTopMargin] = useState("0px");
  document.addEventListener("scroll", () => {
    if (window.scrollY > 180) {
      setPosition("fixed");
      setPositionTopMargin("-170px");
    } else if (window.scrollY < 250) {
      setPosition("static");
      setPositionTopMargin("0px");
    }
  });

  return (
    <Box
      mt={positionTopMargin}
      py={5}
      mx={3}
      
      width="20%"
      display={{ base: "none", lg: "flex" }}

    >
      <Flex
        display="inherit"
        px={2}
        mr={8}
        flexDirection="column"
        position={position}
        
      >
        <Heading
          fontFamily="News Cycle, sans-serif"
          fontWeight="620"
          display="flex"
          fontSize="3xl"
          mb="45px"
        >
          Global Journal
        </Heading>
        {sideCard.map((sideNews, id) => (
          <Flex key={id} display="inherit" flexDirection="inherit">
            <Heading fontSize="2xl">
              <Link target="_blank" href={sideNews.url}>
                {sideNews.title}
              </Link>
            </Heading>
            <Flex my={3}>
              <Text width="365.078px" height="120px">
                {sideNews.description.slice(0, 120)}
              </Text>
            </Flex>
            <Divider my={5} display="inherit" orientation="horizontal" />
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default SideCard;
