import {
  Box,
  Container,
  Heading,
  ChakraProvider,
  Text,
  Link
} from "@chakra-ui/react";

function Header(props) {
  return (
    <>
      <Box
        w="100%"
        pr={{ base: 6, md: 6 }}
        pl={{ base: 6, md: 12 }}
        pt="10"
        pb="2"
        // bg="gray.100"
      >
        <Heading textStyle="title">{props.title}</Heading>
      </Box>
      ;
    </>
  );
}

export { Header };
