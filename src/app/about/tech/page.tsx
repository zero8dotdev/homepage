import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutTech = () => {
  return (
    <div className="col-span-full">
      {/* main heading Tech Stack */}
      <div>
        <h1 className="primary-heading ">Tech Stack</h1>
      </div>
     <div className="space-y-14">
         {/* Flutter */}
      <div className="grid gap-5 lg:grid-cols-2 ">
        {/* flutter logo */}
        <div className="col-span-2">
          <Image
            alt="flutter-logo"
            src="/flutterIcon.png"
            width={52}
            height={52}
            className="w-[52px] h-[52px] lg:w-[77px] lg:h-[78px] "
          />
        </div>
        {/* flutter heading */}
        <div className="col-span-2">
          <p className="text-5xl text-description">Flutter</p>
        </div>
        {/* description */}
        <div className="col-span-2 lg:col-span-1">
          <p className="text-description text-xl">
            Our Flutter app development services are industry agnostic and our
            team is skilled in using the framework to build applications for any
            domain.
          </p>
        </div>
        {/* USP */}
        <div className="col-span-2 lg:col-span-1 text-description text-xl space-y-5">
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
        </div>
      </div>

      {/* React Native */}
      <div className="grid gap-5 lg:grid-cols-2">
        {/* React Native logo */}
        <div className="col-span-2">
          <Image
            alt="react-native-logo"
            src="/reactNativeIcon.png"
            width={52}
            height={52}
            className="w-[52px] h-[52px] lg:w-[77px] lg:h-[78px] "
          />
        </div>
        {/* React Native heading */}
        <div className="col-span-2">
          <p className="text-5xl text-description">React Native</p>
        </div>
        {/* description */}
        <div className="col-span-2 lg:col-span-1">
          <p className="text-description text-xl">
            Our Flutter app development services are industry agnostic and our
            team is skilled in using the framework to build applications for any
            domain.
          </p>
        </div>
        {/* USP */}
        <div className="col-span-2 lg:col-span-1 text-description text-xl space-y-5">
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
        </div>
      </div>

      {/* Next.js */}
      <div className="grid gap-5 lg:grid-cols-2">
        {/* Next.js logo */}
        <div className="col-span-2">
          <Image
            alt="Next.js-logo"
            src="/nextJsIcon.png"
            width={52}
            height={52}
            className="w-[52px] h-[52px] lg:w-[77px] lg:h-[78px] "
          />
        </div>
        {/* Next.js heading */}
        <div className="col-span-2">
          <p className="text-5xl text-description">Next.js</p>
        </div>
        {/* description */}
        <div className="col-span-2 lg:col-span-1">
          <p className="text-description text-xl">
            Our Flutter app development services are industry agnostic and our
            team is skilled in using the framework to build applications for any
            domain.
          </p>
        </div>
        {/* USP */}
        <div className="col-span-2 lg:col-span-1 text-description text-xl space-y-5">
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
        </div>
      </div>

      {/* PostgreSQL */}
      <div className="grid gap-5 lg:grid-cols-2">
        {/* PostgreSQL logo */}
        <div className="col-span-2">
          <Image
            alt="PostgreSQL-logo"
            src="/postgreSql.png"
            width={52}
            height={52}
            className="w-[52px] h-[52px] lg:w-[77px] lg:h-[78px] "
          />
        </div>
        {/* PostgreSQL heading */}
        <div className="col-span-2">
          <p className="text-5xl text-description">PostgreSQL</p>
        </div>
        {/* description */}
        <div className="col-span-2 lg:col-span-1">
          <p className="text-description text-xl">
            Our Flutter app development services are industry agnostic and our
            team is skilled in using the framework to build applications for any
            domain.
          </p>
        </div>
        {/* USP */}
        <div className="col-span-2 lg:col-span-1 text-description text-xl space-y-5">
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
        </div>
      </div>

      {/* GraphQL */}
      <div className="grid gap-5 lg:grid-cols-2">
        {/* GraphQL logo */}
        <div className="col-span-2">
          <Image
            alt="GraphQL-logo"
            src="/graphQlIcon.png"
            width={52}
            height={52}
            className="w-[52px] h-[52px] lg:w-[77px] lg:h-[78px] "
          />
        </div>
        {/* GraphQL heading */}
        <div className="col-span-2">
          <p className="text-5xl text-description">GraphQL</p>
        </div>
        {/* description */}
        <div className="col-span-2 lg:col-span-1">
          <p className="text-description text-xl">
            Our Flutter app development services are industry agnostic and our
            team is skilled in using the framework to build applications for any
            domain.
          </p>
        </div>
        {/* USP */}
        <div className="col-span-2 lg:col-span-1 text-description text-xl space-y-5">
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
        </div>
      </div>

      {/* SQL */}
      <div className="grid gap-5 lg:grid-cols-2">
        {/* SQL logo */}
        <div className="col-span-2">
          <Image
            alt="SQL-logo"
            src="/sqlIcon.png"
            width={52}
            height={52}
            className="w-[52px] h-[52px] lg:w-[77px] lg:h-[78px] "
          />
        </div>
        {/* SQL heading */}
        <div className="col-span-2">
          <p className="text-5xl text-description">SQL</p>
        </div>
        {/* description */}
        <div className="col-span-2 lg:col-span-1">
          <p className="text-description text-xl">
            Our Flutter app development services are industry agnostic and our
            team is skilled in using the framework to build applications for any
            domain.
          </p>
        </div>
        {/* USP */}
        <div className="col-span-2 lg:col-span-1 text-description text-xl space-y-5">
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
          <p>
            USP 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi.
          </p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default AboutTech;
