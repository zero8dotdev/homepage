import { ArrowRight } from "lucide-react";
import React from "react";
import SlideButton from "../_components/SlideButton";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Zero8.Dev",
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

const ourPeoples = [
  { fullName: "Name Lastname", designation: "CEO", photo: "/ourPeople1.png" },
  { fullName: "Name Lastname", designation: "CEO", photo: "/ourPeople1.png" },
  { fullName: "Name Lastname", designation: "CEO", photo: "/ourPeople1.png" },
  { fullName: "Name Lastname", designation: "CEO", photo: "/ourPeople1.png" },
  { fullName: "Name Lastname", designation: "CEO", photo: "/ourPeople1.png" },
  { fullName: "Name Lastname", designation: "CEO", photo: "/ourPeople1.png" },
  { fullName: "Name Lastname", designation: "CEO", photo: "/ourPeople1.png" },
];
const AboutUs = () => {
  return (
    <div className=" col-span-full px-5 py-8 space-y-10 lg:space-y-28">
      {/* we are a team thats made of imagination */}
      <div className="grid grid-cols-4">
        <h1 className="primary-heading leading-none col-span-4">
          We are a team <br className="hidden lg:block" />
          thats made of <br className="hidden lg:block" /> imagination.
        </h1>
        <div className=" grid gap-6 mt-14 grid-cols-2 lg:grid-cols-3 col-span-full lg:col-span-3  lg:mt-20 ">
          <div className="space-y-4">
            <div className="grid grid-cols-2">
              <p className="text-description/70 text-base lg:text-2xl col-span-1">
                Culture
              </p>
              <span className="col-span-1 text-description/70 grid justify-self-end">
                <ArrowRight />
              </span>
            </div>
            <div>
              <p className="text-description/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-3">
              <p className="text-description/70 text-base lg:text-2xl col-span-2">
                Tech we work with
              </p>
              <span className="col-span-1 text-description/70 justify-self-end ">
                <ArrowRight />
              </span>
            </div>
            <div>
              <p className="text-description/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2">
              <p className="text-description/70 text-base lg:text-2xl col-span-1">
                Our Team
              </p>
              <span className="col-span-1 text-description/70 justify-self-end">
                <ArrowRight />
              </span>
            </div>
            <div>
              <p className="text-description/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* our culture */}
      <div className="grid  gap-2 lg:grid-cols-4 lg:gap-x-4">
        <div className="col-span-2 ">
          <div className="max-w-lg flex flex-col justify-between">
            <p className="grid-heading-with-primary-color ">Our Culture</p>
            <p className="text-description/70 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris.
            </p>
            <div className="">
              <SlideButton title="View our tech stack" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block col-span-2 relative w-full min-h-[100px] lg:min-h-[200px] ">
          <Image
            src="/home.png"
            alt="Home Image"
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="gap-2 grid grid-cols-3 lg:grid-cols-2  col-span-2">
          <div className="col-span-1 relative w-full  ">
            <Image
              src="/ourCultureThirdGridFirstBox.png"
              alt="Home Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="col-span-1  relative w-full  min-h-[140px] lg:min-h-[200px] ">
            <Image
              src="/ourCultureThirdGridSecondBox.png"
              alt="Home Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="col-span-1  relative w-full h-full ">
            <Image
              src="/tea.png"
              alt="Home Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 relative w-full  min-h-[140px] lg:min-h-[200px]">
            <Image
              src="/ourCultureThirdGridFourthBox.png"
              alt="Home Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="lg:hidden  col-span-1 relative w-full  min-h-[140px] lg:min-h-[200px]">
            <Image
              src="/home.png"
              alt="Home Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="col-span-2 relative w-full  min-h-[140px] lg:min-h-[200px] ">
          <Image
            src="/ourCultureMeetingPeople.png"
            alt="Home Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Technologies we work with */}
      <div className="grid gap-2 grid-cols-2 lg:grid-cols-4 lg:gap-x-4">
        {/* 1st grid box */}
        <div className="col-span-2 flex flex-col justify-between gap-y-2 row-start-1 row-end-2">
          <p className="grid-heading-with-primary-color leading-none">
            Technologies we work with
          </p>
          <p className="text-description/70 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
          <span className="">
            <SlideButton title="View our tech stack" />
          </span>
        </div>
        {/* 2nd grid box */}
        <div className="col-span-1 lg:col-span-2  relative w-full min-h-[140px] lg:min-h-[200px] ">
          <Image
            src="/react.png"
            alt="Home Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* 3nd grid box */}
        <div className="col-span-1 lg:col-span-2 relative w-full min-h-[140px] lg:min-h-[300px] ">
          <Image
            src="/kotlin.png"
            alt="Home Image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* 4nd grid box */}

        <div className="col-span-full lg:col-span-2 grid grid-cols-3 lg:grid-cols-none gap-2 min-h-[140px] lg:min-h-[300px]">
          <div className="col-span-2 relative w-full  ">
            <Image
              src="/technologiesWeWorkWithPeopleImage.png"
              alt="Home Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* for only mobile */}
          <div className="lg:hidden col-span-1 relative w-full min-h-[140px] ">
            <Image
              src="/technologiesWeWorkWithPeopleImage.png"
              alt="Home Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Our People */}
      <div className="grid  lg:grid-cols-4 space-y-4">
        <div className="space-y-2 col-span-full flex flex-col lg:flex-row  justify-between items-start lg:items-center">
          <h1 className="grid-heading-with-primary-color text-nowrap">
            Our People
          </h1>
          <p className="text-description/70 w-full lg:max-w-[60%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
        </div>
        <div className="col-span-full grid lg:grid-cols-4 gap-4 lg:gap-y-10">
          {ourPeoples.map((mem, index) => (
            <div
              key={index}
              className="flex lg:flex-col lg:col-span-1  gap-x-2 text-description/70"
            >
              <Image
                src={mem.photo}
                width={263}
                height={263}
                alt="CEO"
                className="bg-iconGreen w-24 h-24 lg:w-full lg:h-auto aspect-square"
              />
              <div className="flex justify-between items-center text-description/70  flex-1">
                <div>
                  <p className="text-description/70">{mem.fullName}</p>
                  <p className="text-description/70">{mem.designation}</p>
                </div>

                <Image
                  alt="linkedIn"
                  src="/linkedIn.png"
                  width={20}
                  height={20}
                  className="w-5 h-5 self-end"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
