import { Button, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import { NewsContext } from "../../../context/NewsContext";

const Category = ({ content }) => {
  const { getCategoryButtons } = useContext(NewsContext);
  const bg = useColorModeValue("white", "teal");
  const variant = useColorModeValue("outline", "outline");
  return (
    <Box textAlign="center" width="100%" className="keen-slider__slide">
      <Button
        width="95%"
        onClick={() => getCategoryButtons(content)}
     
        colorScheme={bg}
        variant={variant}
        _hover={{ bg: "#2D3748",color:'white' }}
      >
        <Text
          fontFamily="News Cycle, sans-serif"
          fontSize={{ base: ".7rem", md: "1rem" }}
          fontWeight={{ base: "7px" }}
          mx={20}
        >
          {content.charAt(0).toUpperCase() + content.slice(1)}
        </Text>
      </Button>
    </Box>
  );
};

export default Category;
