import { Box, Flex, Heading, Link, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useContext } from "react";
import Search from "./navbarComponents/Search";
import Theme from "./navbarComponents/Theme";
import Category from "./navbarComponents/Category";
import { useKeenSlider } from "keen-slider/react";
import { NewsContext } from "./../../context/NewsContext";
import Settings from "./navbarComponents/Settings";

const NavNews = () => {
  const { categoryName } = useContext(NewsContext);
  const bg = useColorModeValue("black")
  const color = useColorModeValue("white", "Gray.800")
  const [sliderRef] = useKeenSlider({
    spacing: 1,
    slidesPerView: 12,
    centered: true,
    loop: true,
    mode: "snap",
    breakpoints: {
      "(width: 1200px)": {
        spacing: 0,
        centered: true,
        slidesPerView: 24,
        mode: "free-snap",
      },
    },
  });
  return (
    <Box>
      <Flex width="full" alignItems="center" p={2}>
        <Box p={2}>
          <Heading
            pl={{ base: 0, xl: "55px" }}
            fontFamily="News Cycle, sans-serif"
            fontSize="5xl"
            size="md"
          >
            <Link>
              <Text
              px={2}
              borderRadius={3}
              bgColor={bg}
              color={color}
              >News</Text>
            </Link>
          </Heading>
        </Box>
        <Spacer />
        <Box display="flex">
          <Search />
          <Settings />
          <Theme />
        </Box>
      </Flex>

      <Flex
        my={5}
        ml={"1.5px"}
        w="99.5%"
        justifyContent="center"
        ref={sliderRef}
        alignItems="center"
      >
        {categoryName.map((cName, id) => (
          <Category key={id} content={cName} />
        ))}
      </Flex>
    </Box>
  );
};

export default NavNews;
