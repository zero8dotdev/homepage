import React from "react";
import Featured from "./_components/featured";
import Blog from "./_components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Zero8.Dev",
  description: "We Build Elegant Websites.",
  openGraph: {
    title: "Zero8.Dev",
    description: "We Build Elegant Websites.",
    images: [
      {
        url: "/home.png",
        width: 1200,
        height: 630,
        alt: "Zero8.Dev about image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero8.Dev",
    description: "We Build Elegant Websites.",
    images: ["/home.png"],
  },
};
export const blogs = [
  {
    id: 1,
    slug: "From Concept to Code: How we Build scalable Digital Solutions",
    image: "/digital.png",
    title: "From Concept to Code: How we Build scalable Digital Solutions",
    credits: {
      name: "Amit Velankani",
      rol: "Tech Advisor and Front End Developer @Zero8.Dev",
      TLDR: "Using AI and putting smart analytics in the hands of entrepeneurs.Lorem ipsum dolor sit amet, consctetur adipiscing elit. Ut",
    },
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecteture adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consetetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    techStack: ["stack.png", "stack.png-1", "stack.png-2", "stack.png-3"],
    images: "service-picture",
    strategies: [
      "Lorem ipsum dolor sit amet ,consecterur adipiscing elit.",
      "Lorem ipsum dolor sit amet , consecterur adipiscing elit.",
      "Lorem ipsum dolor sit amet , consecterur adipiscing elit.",
    ],

    textBlock:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecteture adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consetetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecterur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    id: 2,
    slug: "5 Tools Every Developer Should Have in Their Toolkit",
    image: "/desk.png",
    title: "5 Tools Every Developer Should Have in Their Toolkit",
    credits: {
      name: "Amit Velankani",
      rol: "Tech Advisor and Front End Developer @Zero8.Dev",
      TLDR: "Using AI and putting sma5 Tools Every Developer Should Have in Their Toolkitrt analytics in the hands of entrepeneurs.Lorem ipsum dolor sit amet, consctetur adipiscing elit. Ut",
    },
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecteture adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consetetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecterur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    techStack: ["stack.png", "stack.png-1", "stack.png-2", "stack.png-3"],
    images: "service-picture",
    strategies: [
      "Lorem ipsum dolor sit amet ,consecterur adipiscing elit.",
      "Lorem ipsum dolor sit amet , consecterur adipiscing elit.",
      "Lorem ipsum dolor sit amet , consecterur adipiscing elit.",
    ],

    textBlock:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecteture adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consetetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecterur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    id: 3,
    slug: "Understanding the Cloud: A Develpers Perspective",
    image: "/cloud.png",
    title: "Understanding the Cloud: A Develpers Perspective",
    credits: {
      name: "Amit Velankani",
      rol: "Tech Advisor and Front End Developer @Zero8.Dev",
      TLDR: "Using AI and putting smart analytics in the hands of entrepeneurs.Lorem ipsum dolor sit amet, consctetur adipiscing elit. Ut",
    },
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecteture adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consetetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecterur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    techStack: ["stack.png", "stack.png-1", "stack.png-2", "stack.png-3"],
    images: "service-picture",
    strategies: [
      "Lorem ipsum dolor sit amet ,consecterur adipiscing elit.",
      "Lorem ipsum dolor sit amet , consecterur adipiscing elit.",
      "Lorem ipsum dolor sit amet , consecterur adipiscing elit.",
    ],

    textBlock:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecteture adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consetetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecterur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
];
const page = () => {
  return (
    <div className="h-auto col-span-full ">
      <h1 className="text-[55px] text-primary ">Blogs</h1>
      <div className="space-y-5  ">
        <div className="space-y-3">
          <h1 className="text-2xl ">Featured</h1>
          <Featured />
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl">Recently Published</h1>
          {blogs.map((item, index) => (
            <Blog item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
