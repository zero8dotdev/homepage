import React from "react";
import getPostMetadata from "../../../utils/getPostMetadata";
import PostCard from "../_components/postCard";

const Blogs = () => {
  const postMetadata = getPostMetadata("blogs");
  return (
    <main className=" ">
      <div className="postContainer grid gap-10">
        {postMetadata.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Blogs;
