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
    </>
  );
}

function Nav(props) {
  return (
    <>
      <Box
        pt={{ base: 4, md: 4 }}
        pl="6"
        pr={{ base: 6, md: 12 }}
        pb={{ base: 6, md: 6 }}
        // bg="yellow.100"
      >
        <Text textStyle="heading1">Archive</Text>
        {/* <ArchiveList /> */}
        <ul>{props.entries}</ul>
        <br />
        <Text textStyle="heading1">ABOUT US</Text>
      </Box>
    </>
  );
}

export { Header, Nav };
