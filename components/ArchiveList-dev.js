import { Text } from "@chakra-ui/react";

import { fetchEntries } from "./contentfulPosts";

export default function ArchiveList({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => {
        return <div>{p.title}</div>;
        // return <Post key={p.date} date={p.date} image={p.image.fields} title={p.title} />
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts
    }
  };
}
