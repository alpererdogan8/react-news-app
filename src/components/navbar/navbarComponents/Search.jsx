import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Kbd,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { NewsContext } from "../../../context/NewsContext";

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalControl, setModalControl] = useState(false);
  const [input, setInput] = useState();
  const toast = useToast();
  const { getSearchResults } = useContext(NewsContext);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
     
      controlSearchData();
    }
  };

  window.addEventListener("keydown", (event) => {
    if (event.key === "k" && event.ctrlKey) {
      if (modalControl === false) {
        event.preventDefault();
        setModalControl(!modalControl);
        return onOpen();
      }
      if (modalControl === true) {
        event.preventDefault();
        setModalControl(!modalControl);
        return onClose();
      }
    }
  });

  const controlSearchData = (e) => {
    if (!input) {
      const getToast = toast({
        position: "top-right",
        title: "Failed Search",
        description: "Search for something",
        status: "warning",
        duration: 1000,
        isClosable: true,
      });
     
      return getToast;
    } else {
      getSearchResults(input);
    }
    
  };

  return (
    <>
      <Button
        onClick={onOpen}
        w={{ base: "40px", md: "220px" }}
        px={2}
        borderRadius={50}
      >
        <Flex width="full" px={2} alignItems="center" justifyContent="center">
          <Search2Icon />
          <Box
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            ml={1}
            mt={1}
            width="full"
            fontFamily="Nunito Sans, sans-serif"
            display={{ base: "none", md: "flex" }}
          >
            <Spacer />
            <Text mx={1}>Search</Text>
            <Spacer />
            <Kbd>Ctrl</Kbd>+<Kbd>K</Kbd>
          </Box>
        </Flex>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl my={2}>
              <Input _selected
                placeholder="Search something"
                onKeyUp={(e) => setInput(e.target.value)}
                onKeyDown={(e) => handleKeyPress(e)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Flex justifyContent="flex-end">
              <Button
                onClick={(e) => {
                  controlSearchData(e);
                }}
                colorScheme="blue"
                mr={3}
                onClose={onClose}
              >
                Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Search;
