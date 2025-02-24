import Image from "next/image";
import React from "react";

const Blog = ({ item }: { item: any }) => {
  return (
    <div className="bg-charcoal grid lg:grid-cols-2">
      <Image
        src={`${item.image}`}
        alt="yoga"
        width={0}
        height={0}
        className="w-full lg:col-span-1"
        layout="responsive"
        objectFit="cover"
      />
      <div className="px-4 lg:col-span-1 space-y-4 p-4 ">
        <h1 className="text-4xl">{item.title}</h1>
        <p className="text-textSecondary"> 2 min read</p>
        <p className="text-textSecondary">{item.desc}</p>
        <p className="text-textSecondary">6 January 2025</p>
      </div>
    </div>
  );
};

export default Blog;
