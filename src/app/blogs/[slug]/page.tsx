import Image from "next/image";
import React from "react";
import Strategies from "./_components/strategies";
import Credits from "./_components/credits";
import { Metadata } from "next";
import { blogs } from "../page";

interface props {
  params: {
    slug: string;
  };
}

export const generateMetadata = ({ params }: props): Metadata => {
  const formatSlug = (slug: string) => {
    return slug
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };
  const blog = blogs.find((e) => formatSlug(e.slug) === params.slug);
  const blogzDetails = blog ? blog : null;

  return {
    title: `${blogzDetails?.title}`,
    description: `We Build Elegant Websites.`,
    openGraph: {
      title: `blog ${blogzDetails?.title}`,
      description: `blog ${blogzDetails?.textBlock}`,
      url: "https://zero8.dev",
      siteName: `Blog ${blogzDetails?.title}`,
      images: [
        {
          url: "/image.png",
          width: 1200,
          height: 630,
          alt: `blog ${blogzDetails?.title}`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Zero8.Dev",
      description: "We Build Elegant Websites.",
      images: ["/home.png"],
    },
  };
};

const Page = ({ params }: props) => {
  const slug = params.slug;

  const formatSlug = (slug: string) => {
    return slug
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };
  const blogzDetails = blogs.find((e) => formatSlug(e.slug) === slug);

  if (!blogzDetails) {
    return <div className="text-red-500">Blog not found!</div>;
  }

  return (
    <div className="col-span-full h-auto space-y-5">
      <p className="text-textSecondary text-2xl font-bold">Blogs</p>
      {/* heading */}
      <h1 className="text-[34px] text-primary letter">{blogzDetails?.title}</h1>
      <Credits credits={blogzDetails?.credits} />
      <div className="col-span-full bg-charcoal p-4">
        <h1 className="text-[22px]">The Challenge</h1>
        <p>{blogzDetails?.challenges}</p>
      </div>
      <Strategies keyStrategies={blogzDetails?.strategies} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Image
          alt="/image"
          src="/image.png"
          className="w-full"
          width={400}
          height={400}
        />
        <div className=" bg-charcoal p-4">
          <h1 className="text-[22px]">Another text block</h1>
          <p>{blogzDetails?.textBlock}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
