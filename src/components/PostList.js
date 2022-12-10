import { useEffect, useState } from "react";
import { getPosts } from "../src/services/posts.jsx";

export function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then(setPosts);
  }, []);
  return (
    <h1 key={post.id}>
      <a href={`/posts/${post.id}`}>{post.title}</a>
    </h1>
  );

  return <h1>{JSON.stringify(posts)}</h1>;
}
