import React from "react";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "../../../../utils/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const folder = "blogs/";
  const fileName = folder + `${slug}.md`;
  const fileContent = fs.readFileSync(fileName, "utf8");

  const matterResult = matter(fileContent);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata("blogs");
  return posts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async ({
  params,
}: {
  params: any;
  searchParams: any;
}) => {
  const id = params?.slug ? params?.slug : "";
  return {
    title: ` ${id.replaceAll("_", " ")} | Zero8.dev`,
    description: "A blog platform built with Next.js",
    // openGraph: {
    //   type: "website",
    //   url: `https://example.com/blogs/${id}`,
    //   title: "Blog | Next.js",
    //   description: "A blog platform built with Next.js",
    //   images: [
    //     {
    //       url: "https://example.com/og-image.jpg",
    //       width: 800,
    //       height: 600,
    //     },
    //   ],
    // },
  };
};
const BlogPage = (props: any) => {
  const slug = props.params?.slug;
  const post = getPostContent(slug);
  return (
    <main>
      <article className="text-white">
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
};

export default BlogPage;
