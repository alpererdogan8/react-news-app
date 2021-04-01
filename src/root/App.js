import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

import Card from "../components/cards/Card";
import NavNews from "../components/navbar/NavNews";
import { useContext } from "react";
import { NewsContext } from "./../context/NewsContext";
import SideCard from "./../components/cards/SideCard";

function App() {
  const { data } = useContext(NewsContext);
  return (
    <Box>
      <NavNews />
      <Flex
        mr={0}
        pl={{ base: "0px", md: "2px" }}
        justifyContent={{ base: "center" }}
      >
        <Card data={data} />
        <SideCard />
      </Flex>

      <Flex mt={20} width="full" bg="black" color="white" h={100} zIndex={99}  justifyContent="center" alignItems="center">
        <Text>The source of these news is NewsAPI.org</Text>
      </Flex>
    </Box>
  );
}

export default App;
