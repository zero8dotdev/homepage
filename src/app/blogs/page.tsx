import Image from "next/image";
import React from "react";
import Featured from "./_components/featured";
import Blog from "./_components/blog";

const page = () => {
  const items = [
    {
      image: "/digital.png",
      title: "From Concept to Code: How we Build scalable Digital Solutions",
      desc: "Writing clean, maintainable code is more than a technical skill -it is a philosophy. In this post, we wil explore the principles behind clean coding and how they contribute to better collaboration, faster debugging and scalable projects.",
    },
    {
      image: "/desk.png",
      title: "5 Tools Every Developer Should Have in Their Toolkit",
      desc: "In the ever-envolving tech landscpe, having the right tools can make all the dirrerence. This post dives into the must-have tools that streamine workflows, boost productivity , and help tackle comples challenges with ease.",
    },
    {
      image: "/cloud.png",
      title: "Understanding the Cloud: A Develpers Perspective",
      desc: "Writing clean, maintainable code is more than a technical skill -it is a philosophy. In theis post, we will explore the principles behind clean coding and how they contribute to better collboration, faster debugging, and scalable projects.",
    },
  ];
  return (
    <div className="h-auto col-span-full p-4">
      <h1 className="text-[55px] text-primary ">Blogs</h1>
      <div className="space-y-5  ">
        <div className="space-y-3">
          <h1 className="text-2xl ">Featured</h1>
          <Featured />
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl">Recently Published</h1>
          {items.map((item, index) => (
            <Blog item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
