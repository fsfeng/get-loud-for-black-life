const space = "jm1v8d9gwzzo";
const accessToken = "BfPwj4m630OxWB9SKM_CX5jKJuPpMnqbxOvYSxB2O5o";

async function getSiteInfo() {
  const client = require("contentful").createClient({
    space: space,
    accessToken: accessToken
  });

  const response = await client.getEntries({
    // content_type: "SiteInfo"
  });
  return response;
}

export { getSiteInfo };
