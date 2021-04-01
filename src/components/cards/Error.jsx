import { Center } from "@chakra-ui/react";
import React from "react";
import Search from "./../navbar/navbarComponents/Search";

function Error() {
  return (
    <Center bg="tomato" h="100px" color="white">
      Search Not Found
    </Center>
  );
}

export default Error;
