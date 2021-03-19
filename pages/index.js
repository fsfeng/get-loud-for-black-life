import { Link as NextLink } from "next/link";
// import App from "./MN4BL-dev";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
// Components
import {
  Box,
  Container,
  Heading,
  ChakraProvider,
  Text,
  Link
} from "@chakra-ui/react";

// Fonts
import { Fonts } from "../theme/Fonts";

// Theme
import chakraTheme from "../theme/chakraTheme";

import { Header } from "../components/LayoutFunctions";

import {
  getArchiveEntries,
  getSiteInfo
} from "../components/ContentfulFunctions";

// import { getSiteInfo } from "../components/testContentful";

// import Header from "@components/Header";
// import Footer from "@components/Footer";
// import Post from "@components/Post";

export default function Home({ entries, info }) {
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
              <Text textStyle="heading1">{info.fields.MainHeading}</Text>

              <Text textStyle="text">
                Getting a new business off the ground is a lot of hard work.
                Here are five ideas you can use to find your first customers.
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
              <Box
                pt={{ base: 4, md: 4 }}
                pl="6"
                pr={{ base: 6, md: 12 }}
                pb={{ base: 6, md: 6 }}
                // bg="yellow.100"
              >
                <Text textStyle="heading1">Archive</Text>
                {/* <ArchiveList /> */}
                <ul>
                  {entries.map((p) => {
                    // console.log(p.sys.id);
                    return (
                      <li key={p.sys.id}>
                        <Link as={NextLink} href={"/items/" + p.fields.slug}>
                          <a>{p.fields.title}</a>
                        </Link>
                      </li>
                    );
                    // return <Post key={p.date} date={p.date} image={p.image.fields} title={p.title} />
                  })}
                </ul>
              </Box>
            </Box>
          </Box>
        </Container>
      </ChakraProvider>
    </Fragment>
  );
}

export async function getStaticProps() {
  // Get list of archive recordings
  const res = await getArchiveEntries();

  const entries = await res.map((p) => {
    return p;
  });

  const info = await getSiteInfo();
  console.log(info);

  return {
    props: {
      entries,
      info
    }
  };
}
