import { useEffect, useState } from "react";
import { getPosts } from "../services/posts.jsx";

export function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then(setPosts);
  }, []);
  return (
    <h1 key={posts.id}>
      <a href={`/posts/${posts.id}`}>{posts.title}</a>
    </h1>
  );

  return <h1>{JSON.stringify(posts)}</h1>;
}
