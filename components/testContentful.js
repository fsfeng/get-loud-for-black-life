// import fs from "fs";
import path from "path";
// import { promises as fs } from "fs";
// const download = require("downloadjs");

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

async function getProps() {
  // Get list of archive recordings
  const res = await getArchiveEntries();

  const entries = await res.map((p) => {
    return p;
  });

  const info = await getSiteInfo();

  return {
    props: {
      entries,
      info
    }
  };
}

async function getEntries() {
  const res = await getArchiveEntries();

  const entries = await res.map((p) => {
    return p;
  });

  return entries;
}

async function getInfo() {
  const info = await getSiteInfo();
  return JSON.stringify(info);
}

// async function downloadFile() {
//   const info = await getSiteInfo();

//   // fs.writeFileSync(
//   //   path.join(__dirname, "..", "data", `${type}.json`),
//   //   JSON.stringify(info)
//   // );

//   // from downloadjs it will download your file
//   // download(info, path.join(__dirname, "..", "data", "info.json"));
// }

export { getArchiveEntries, getSiteInfo, getProps, getEntries, getInfo };
// export { getSiteInfo, getSpace };
