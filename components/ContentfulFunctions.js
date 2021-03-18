const space = "jm1v8d9gwzzo";
const accessToken = "BfPwj4m630OxWB9SKM_CX5jKJuPpMnqbxOvYSxB2O5o";

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken
});

async function getArchiveEntries() {
  const entries = await client.getEntries({
    content_type: "archiveRecording"
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries`);
}

async function getSiteInfo() {
  // Site info stored in this particular entry; can be changed
  const prod_entry_id = "18s05rRhsB2HW6BVGSEr3T";

  const response = await client.getEntry(prod_entry_id);
  if (response) return response;
  console.log(`Error getting Entries`);
}

async function getSpace() {
  // const client = require("contentful").createClient({
  //   space: space,
  //   accessToken: accessToken
  // });

  const responseSpace = await client.getSpace();
  return responseSpace;
}

export { getArchiveEntries, getSiteInfo, getSpace };
// export { getSiteInfo, getSpace };
