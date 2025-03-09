import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";
import SlideButton from "../_components/SlideButton";
import Image from "next/image";

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
      <div className="grid gap-5  lg:grid-cols-2 ">
        <div className=" col-span-1 ">
          <div className="grid grid-cols-3">
            <p className="grid-heading-with-primary-color col-span-3">
              Our Culture
            </p>
            <p className="text-description col-span-full lg:col-span-2 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris.
            </p>
            <span className="col-span-3">
              <SlideButton title="View our tech stack" />
            </span>
          </div>
        </div>
        <div className="col-span-1 relative w-full min-h-[200px] ring-1">
          <Image
            src="/home.png"
            alt="Home Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="grid gap-5 grid-cols-2 ">
          <div className="col-span-1  relative w-full  ">
            <Image
              src="/ourCultureThirdGridFirstBox.png"
              alt="Home Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="col-span-1  relative w-full min-h-[200px] ">
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
          <div className="col-span-1 relative w-full min-h-[200px]">
            <Image
              src="/ourCultureThirdGridFourthBox.png"
              alt="Home Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className=" col-span-1 relative w-full min-h-[200px] ">
          <Image
            src="/ourCultureMeetingPeople.png"
            alt="Home Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Technologies we work with */}
      <div className="  grid gap-5 lg:grid-cols-2 ">
        {/* 1st grid box */}
        <div className=" grid grid-cols-3 col-span-1">
          <p className="grid-heading-with-primary-color col-span-3 leading-none ">
            Technologies <br /> we work with
          </p>
          <p className="text-description lg:mt-10 col-span-full lg:col-span-2 lg:pr-8 mb-10 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
          <span className="row-start-3 col-span-2">
            <SlideButton title="View our tech stack" />
          </span>
        </div>
        {/* 2nd grid box */}
        <div className="col-span-1  relative w-full min-h-[200px] ">
          <Image
            src="/react.png"
            alt="Home Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* 3nd grid box */}
        <div className="col-span-1 relative w-full min-h-[200px] ">
          <Image
            src="/kotlin.png"
            alt="Home Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* 4nd grid box */}
        <div className="col-span-1 relative w-full min-h-[300px] ">
          <Image
            src="/technologiesWeWorkWithPeopleImage.png"
            alt="Home Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Our People */}
      <div className="   grid gap-5 lg:grid-cols-4 ">
        <p className="grid-heading-with-primary-color col-span-2 ">
          Our People
        </p>
        <div className="col-span-2 grid place-items-center">
          <p className="text-description  lg:pr-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
        </div>
        <div className="col-span-1">
          <Image src="/ourPeople1.png" width={263} height={150} alt="CEO" />
          <p className="text-description">Name LastName</p>
        </div>
        <div className="col-span-1">
          <Image src="/ourPeople1.png" width={263} height={150} alt="CEO" />
          <p className="text-description">Name LastName</p>
        </div>
        <div className="col-span-1">
          <Image src="/ourPeople1.png" width={263} height={150} alt="CEO" />
          <p className="text-description">Name LastName</p>
        </div>
        <div className="col-span-1">
          <Image src="/ourPeople1.png" width={263} height={150} alt="CEO" />
          <p className="text-description">Name LastName</p>
        </div>
        <div className="col-span-1">
          <Image src="/ourPeople1.png" width={263} height={150} alt="CEO" />
          <p className="text-description">Name LastName</p>
        </div>
        <div className="col-span-1">
          <Image src="/ourPeople1.png" width={263} height={150} alt="CEO" />
          <p className="text-description">Name LastName</p>
        </div>
        <div className="col-span-1">
          <Image src="/ourPeople1.png" width={263} height={150} alt="CEO" />
          <p className="text-description">Name LastName</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
