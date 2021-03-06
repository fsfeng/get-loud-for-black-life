import { Link as NextLink } from "next/link";
// import App from "./MN4BL-dev";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
// Components
import {
  Box,
  Container,
  Heading,
  Image,
  ChakraProvider,
  Text,
  Link
} from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// Fonts
import { Fonts } from "../theme/Fonts";

// Theme
import chakraTheme from "../theme/chakraTheme";

import { Header, Nav } from "../components/LayoutFunctions";

import {
  getArchiveEntries,
  getSiteInfo
} from "../components/ContentfulFunctions";

export default function Home({ entries, info }) {
  const archiveEntries = entries.map((p) => (
    <li key={p.sys.id}>
      <Link as={NextLink} href={"/items/" + p.fields.slug}>
        <a>{p.fields.title}</a>
      </Link>
    </li>
  ));

  return (
    <Fragment>
      <ChakraProvider theme={chakraTheme}>
        <Fonts />
        <Container maxW="5xl" centerContent>
          <Header title={info.fields.siteTitle} />

          <Box
            display={{ sm: "flex" }}
            // bg="gray.100"
          >
            <Box
              pt={{ base: 4, md: 4 }}
              pr={{ base: 6, md: 6 }}
              pl={{ base: 6, md: 12 }}
              pb={{ base: 6, md: 6 }}
              // bg="blue.100"
              border="dotted"
              borderColor="orange.200"
            >
              {/* <br /> */}
              <Image
                borderRadius="lg"
                width={{ md: "80" }}
                src="https://abcd-artbrut.net/wordpress/wp-content/uploads/2015/09/RIZZY.Ras_.2921.jpg"
                alt="Woman paying for a purchase"
              />
              <br />
              <Text textStyle="heading1">{info.fields.mainHeading}</Text>
              <br />

              <Text textStyle="text">
                {documentToReactComponents(info.fields.mainDescription)}
              </Text>
            </Box>

            {/* <Box flexShrink={0}>
            <Image
              borderRadius="lg"
              width={{ md: "80" }}
              src="https://bit.ly/2jYM25F"
              alt="Woman paying for a purchase"
            />
          </Box> */}

            <Box
              flexShrink={0}
              width={{ sm: "60" }}
              bg="orange.100"
              border="dotted"
              borderColor="orange.200"
            >
              <Nav entries={archiveEntries} />
            </Box>
          </Box>
        </Container>
      </ChakraProvider>
    </Fragment>
  );
}

export async function getStaticProps() {
  // Get list of archive recordings
  const entries = await getArchiveEntries();

  // Get site info
  const info = await getSiteInfo();

  return {
    props: {
      entries,
      info
    }
  };
}
