import React, { Fragment } from "react";

const space = "jm1v8d9gwzzo";
const accessToken = "BfPwj4m630OxWB9SKM_CX5jKJuPpMnqbxOvYSxB2O5o";

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken
});

export async function getStaticPaths() {
  const entries = await client.getEntries({
    content_type: "archiveRecording"
  });

  return {
    paths: entries.items.map((item) => ({
      params: { slug: item.fields.slug }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const entries = await client.getEntries({
    content_type: "archiveRecording",
    "fields.slug": params.slug
  });

  return {
    props: {
      entry: entries.items[0]
    }
  };
}
export default function ArchiveEntry({ entry }) {
  console.log(entry);

  return (
    <Fragment>
      <div> {entry.fields.title}</div>
    </Fragment>
  );
}

// export default { fetchEntries };
