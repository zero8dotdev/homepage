import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const techStack = [
  {
    name: "Flutter",
    icon: "/flutterIcon.png",
    description:
      "Our Flutter app development services are industry agnostic and our team is skilled in using the framework to build applications for any domain.",
    usps: [
      "USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      "USP 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      "USP 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    ],
  },
  {
    name: "React Native",
    icon: "/reactNativeIcon.png",
    description:
      "Our Flutter app development services are industry agnostic and our team is skilled in using the framework to build applications for any domain.",
    usps: [
      "USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      "USP 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      "USP 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    ],
  },
  {
    name: "Next.js",
    icon: "/nextJsIcon.png",
    description:
      "Our Flutter app development services are industry agnostic and our team is skilled in using the framework to build applications for any domain.",
    usps: [
      "USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      "USP 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      "USP 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    ],
  },
  {
    name: "PostgreSQL",
    icon: "/postgreSql.png",
    description:
      "Our Flutter app development services are industry agnostic and our team is skilled in using the framework to build applications for any domain.",
    usps: [
      "USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      "USP 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      "USP 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    ],
  },
  {
    name: "GraphQL",
    icon: "/graphQlIcon.png",
    description:
      "Our Flutter app development services are industry agnostic and our team is skilled in using the framework to build applications for any domain.",
    usps: [
      "USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      "USP 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      "USP 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    ],
  },
  {
    name: "SQL",
    icon: "/sqlIcon.png",
    description:
      "Our Flutter app development services are industry agnostic and our team is skilled in using the framework to build applications for any domain.",
    usps: [
      "USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      "USP 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      "USP 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    ],
  },
];

const AboutTech = () => {
  return (
    <div className="ml-grid-content-spacing col-span-full">
      <div>
        <h1 className="primary-heading">Tech Stack</h1>
      </div>

      <div className="space-y-14">
        {techStack.map((tech, index) => (
          <div key={index} className="grid gap-5 lg:grid-cols-2">
            {/* Logo */}
            <div className="col-span-2">
              <Image
                alt={`${tech.name}-logo`}
                src={tech.icon}
                width={52}
                height={52}
                className="w-[52px] h-[52px] lg:w-[77px] lg:h-[78px]"
              />
            </div>
            {/* Heading */}
            <div className="col-span-2">
              <p className="text-5xl text-description">{tech.name}</p>
            </div>
            {/* Description */}
            <div className="col-span-2 lg:col-span-1">
              <p className="text-description text-xl">{tech.description}</p>
            </div>
            {/* USPs */}
            <div className="ml-grid-content-spacing col-span-2 lg:col-span-1 text-description text-xl space-y-5">
              {tech.usps.map((usp, i) => (
                <p key={i}>{usp}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTech;
