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
  { fullName: "Name Lastname", photo: "/ourPeople1.png" },
  { fullName: "Name Lastname", photo: "/ourPeople1.png" },
  { fullName: "Name Lastname", photo: "/ourPeople1.png" },
  { fullName: "Name Lastname", photo: "/ourPeople1.png" },
  { fullName: "Name Lastname", photo: "/ourPeople1.png" },
  { fullName: "Name Lastname", photo: "/ourPeople1.png" },
  { fullName: "Name Lastname", photo: "/ourPeople1.png" },
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
              <p className="text-description text-base lg:text-2xl col-span-1">
                Culture
              </p>
              <span className="col-span-1 text-description grid justify-self-end">
                <ArrowRight />
              </span>
            </div>
            <div>
              <p className="text-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-3">
              <p className="text-description text-base lg:text-2xl col-span-2">
                Tech we work with
              </p>
              <span className="col-span-1 text-description justify-self-end ">
                <ArrowRight />
              </span>
            </div>
            <div>
              <p className="text-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2">
              <p className="text-description text-base lg:text-2xl col-span-1">
                Our Team
              </p>
              <span className="col-span-1 text-description justify-self-end">
                <ArrowRight />
              </span>
            </div>
            <div>
              <p className="text-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* our culture */}
      <div className="grid  gap-2 lg:grid-cols-4 ">
        <div className=" col-span-2 ">
          <div className="max-w-lg flex flex-col justify-between">
            <p className="grid-heading-with-primary-color ">Our Culture</p>
            <p className="text-description mb-5">
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
          <div className="col-span-1  relative w-full  min-h-[100px] lg:min-h-[200px] ">
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
          <div className="col-span-2 lg:col-span-1 relative w-full  min-h-[100px] lg:min-h-[200px]">
            <Image
              src="/ourCultureThirdGridFourthBox.png"
              alt="Home Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="lg:hidden  col-span-1 relative w-full  min-h-[100px] lg:min-h-[200px]">
            <Image
              src="/home.png"
              alt="Home Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className=" col-span-2 relative w-full  min-h-[100px] lg:min-h-[200px] ">
          <Image
            src="/ourCultureMeetingPeople.png"
            alt="Home Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Technologies we work with */}
      <div className="  grid gap-5 lg:grid-cols-4 ">
        {/* 1st grid box */}
        <div className="col-span-2 flex flex-col justify-between gap-y-2 row-start-1 row-end-2">
          <p className="grid-heading-with-primary-color leading-none">
            Technologies we work with
          </p>
          <p className="text-description ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
          <span className="">
            <SlideButton title="View our tech stack" />
          </span>
        </div>
        {/* 2nd grid box */}
        <div className="col-span-2  relative w-full min-h-[200px] ">
          <Image
            src="/react.png"
            alt="Home Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* 3nd grid box */}
        <div className="col-span-2 relative w-full min-h-[200px] ">
          <Image
            src="/kotlin.png"
            alt="Home Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* 4nd grid box */}
        <div className="col-span-2 relative w-full min-h-[300px] ">
          <Image
            src="/technologiesWeWorkWithPeopleImage.png"
            alt="Home Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Our People */}
      <div className="grid gap-5 lg:grid-cols-4">
        <p className="grid-heading-with-primary-color col-span-2 block ">
          Our People
        </p>
        <div className="lg:col-span-2 grid place-items-center">
          <p className="text-description  lg:pr-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-4">
        {ourPeoples.map((el, index) => {
          return (
            <div key={index}>
              <div className="flex lg:flex-col gap-x-10 bg-charcoal">
                <div className="inline-block">
                  <Image
                    alt="team"
                    src={el.photo}
                    width={100}
                    height={100}
                    className="bg-iconGreen w-[100px] lg:w-[400px] h-auto"
                  />
                </div>
                <div className="flex-col w-full text-description">
                  <div className="lg:flex lg:justify-between">
                    <p>Name Lastname</p>
                    <p className="hidden lg:block border border-iconGreen  px-1 ">
                      in
                    </p>
                  </div>
                  <div>
                    <p>CEO</p>
                  </div>
                  <div className="lg:hidden w-[95%] flex justify-between items-center ">
                    <div></div> {/* Empty div to push "in" to the end */}
                    <p className="border border-iconGreen inline-block px-1 ">
                      in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
