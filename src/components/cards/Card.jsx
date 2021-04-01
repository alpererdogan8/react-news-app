import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
  Spinner,
  Text,
} from "@chakra-ui/react";

import moment from "moment";
import React, { useContext } from "react";

import { NewsContext } from "../../context/NewsContext";

/*Gereksinimler
 key={id}
{article.urlToImage}
{article.title}
{article.description === true ? article.description : article.content}
{article.publishedAt}*/
const Card = ({ data, key }) => {
  const { headers } = useContext(NewsContext);
  return (
    <Flex flexDirection="column" width={2 / 3}>
      {!data ? (
        <Flex
          width="100%"
          height="50vh"
          mt="-85"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner size="xl" />
        </Flex>
      ) : (
        <>
          <Flex my={4}>
            <Text
              fontFamily="News Cycle, sans-serif"
              fontWeight="620"
              fontSize={{ base: "2xl", md: "4xl" }}
            >
              {headers.charAt(0).toUpperCase() + headers.slice(1)}
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            width="full"
            justifyContent="center"
            alignItems="center"
          >
            {data.map((article, i) => (
              <Box
                key={i}
                mx={5}
                w="full"
                display={{ md: "flex" }}
                justifyContent="flex-start"
                alignItems="start"
                my={4}
                pl={{ base: -5, xl: 0 }}
                pb={2}
                style={{ borderBottom: "solid 1px rgba(255, 255, 255, 0.16)" }}
              >
                <Box flexShrink={0}>
                  <Image
                    borderRadius="lg"
                    width={{ md: 80, lg: "18rem" }}
                    src={article.urlToImage}
                    alt={article.description}
                  />
                </Box>
                <Spacer mx={1} />
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 1, xl: 0 }}>
                  <Text
                    fontWeight="bold"
                    fontSize="sm"
                    letterSpacing="wide"
                    color="teal.600"
                  >
                    {article.author ? (
                      <Badge variant="outline" colorScheme="green">
                        {article.author}
                      </Badge>
                    ) : (
                      <Badge variant="outline" colorScheme="red">
                        Title Not Found
                      </Badge>
                    )}
                  </Text>
                  <Heading
                    mt={1}
                    display="block"
                    fontSize="xl"
                    lineHeight="normal"
                    fontWeight="700"
                    
                    fontFamily="News Cycle, sans-serif"
                  >
                    <Link target="_blank" href={article.url}> {article.title}</Link>
                  </Heading>
                  <Text
                    fontWeight="600"
                    fontSize="md"
                    mt={2}
                    color="gray.500"
                    fontFamily="News Cycle, sans-serif"
                  >
                    {article.description
                      ? article.description
                      : article.content}
                  </Text>
                  <Text float="right" fontSize=".9rem" mt={2} color="gray.500">
                    {moment(article.publishedAt).startOf("day").fromNow()}
                  </Text>
                </Box>
              </Box>
            ))}
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Card;
