import { Metadata } from "next";
import Image from "next/image";
import Dropdowns from "./dropdown";

export const metadata: Metadata = {
  title: "Work - Zero8.Dev",
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

const dropdownData = [
  {
    label: "Region",
    options: ["north america", "europe", "asia", "australia", "africa"],
  },
  {
    label: "Industry",
    options: ["technology", "finance", "healthcare", "retail", "education"],
  },
  {
    label: "Tech Stack",
    options: ["react", "next.js", "node.js", "tailwind css", "typescript"],
  },
  {
    label: "Services",
    options: [
      "web development",
      "ui/ux design",
      "seo services",
      "digital marketing",
      "consulting",
    ],
  },
];

export default function WorkSection() {
  const projects = [
    {
      id: 1,
      title: "From Concept to Code: How We Build Scalable Digital Solutions",
      description: "2 min read | 6 January 2025",
      imageSrc: "/images/cardPhoto.png",
      altText: "Work 1",
    },
    {
      id: 2,
      title: "Designing for the Future: Crafting Intuitive User Interfaces",
      description: "3 min read | 12 February 2025",
      imageSrc: "/images/cardPhoto.png",
      altText: "Work 2",
    },
    {
      id: 3,
      title: "Optimizing Performance: Best Practices for Web Applications",
      description: "4 min read | 18 March 2025",
      imageSrc: "/images/cardPhoto.png",
      altText: "Work 3",
    },
    {
      id: 4,
      title: "Harnessing the Power of APIs: Building Data-Driven Apps",
      description: "5 min read | 22 April 2025",
      imageSrc: "/images/cardPhoto.png",
      altText: "Work 4",
    },
  ];

  return (
    <div className="space-y-8 col-span-full relative">
      <h1 className="primary-heading font-bold mb-8">Our life&apos;s work</h1>

      <Dropdowns dropdowns={dropdownData} />

      <div className="grid lg:grid-cols-4 gap-4 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="col-span-2 flex flex-col h-full bg-charcoal"
          >
            <div className="">
              <Image
                width={628}
                height={460}
                src={project.imageSrc}
                alt={project.altText}
                className="w-full h-72 lg:h-96 "
                //   sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
              />
            </div>

            <div className="flex-grow bg-black bg-opacity-80 p-4 flex flex-col justify-between">
              <h3 className="text-lg text-white font-semibold">
                {project.title}
              </h3>
              <p className="text-sm text-primary">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
