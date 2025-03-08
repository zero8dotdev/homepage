import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";
import SlideButton from "../_components/SlideButton";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className=" col-span-full">
      {/* we are a team thats made of imagination */}
      <div className="grid grid-cols-4">
        <h1 className="primary-heading leading-none col-span-4">
          We are a team <br />
          thats made of <br /> imagination.
        </h1>
        <div className=" grid gap-6 mt-14 lg:grid-cols-3 col-span-3  lg:mt-20 ">
          <div className="lg:pr-10">
            <div className="grid grid-cols-2">
              <p className="text-gridTextColor text-base sm:text-2xl col-span-1">
                Culture
              </p>
              <span className="col-span-1 text-gridTextColor grid justify-self-center">
                <ArrowRight />
              </span>
            </div>
            <div>
              <p className="text-gridTextColor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam
              </p>
            </div>
          </div>

          <div className="lg:pr-10">
            <div className="grid grid-cols-3">
              <p className="text-gridTextColor text-base sm:text-2xl col-span-2">
              Tech we work with
              </p>
              <span className="col-span-1 text-gridTextColor justify-self-center ">
                <ArrowRight />
              </span>
            </div>
            <div>
              <p className="text-gridTextColor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam
              </p>
            </div>
          </div>

          <div className="lg:pr-10">
            <div className="grid grid-cols-2">
              <p className="text-gridTextColor text-base sm:text-2xl col-span-1">
                Our Team
              </p>
              <span className="col-span-1 text-gridTextColor lg:justify-self-center">
                <ArrowRight />
              </span>
            </div>
            <div>
              <p className="text-gridTextColor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* our culture */}
      <div className="grid gap-5 mt-14 lg:grid-cols-2 lg:mt-20">
        {/* 1st grid box */}
        <div className=" col-span-1 ">
          <div className="grid grid-cols-3">
            <p className="grid-heading-with-primary-color col-span-3">
              Our Culture
            </p>
            <p className="text-gridTextColor lg:pr-8 col-span-2 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris.
            </p>
            <span className="col-span-3">
              <SlideButton title="View our tech stack" />
            </span>
          </div>
        </div>
        {/* 2nd grid box */}
        <div className="col-span-1 ring-1">
          <Image src="" alt="Home Image" width={300} height={300} />
        </div>
        {/* 3rd grid box */}
        <div className="grid gap-5 grid-cols-2">
          {/* 3rd grid --> 1st grid */}
          <div className="col-span-1 ring-1 ">
            <Image src="" alt="Home Image" width={200} height={200} />
          </div>
          {/* 3rd grid --> 2st grid */}
          <div className="col-span-1 ring-1">
            <Image src="" alt="Home Image" width={200} height={200} />
          </div>
          {/* 3rd grid --> 3st grid */}
          <div className="col-span-1  ring-1">
            <Image src="" alt="Home Image" width={200} height={200} />
          </div>
          {/* 3rd grid --> 4st grid */}
          <div className="col-span-1 ring-1">
            <Image src="" alt="Home Image" width={200} height={200} />
          </div>
        </div>
        {/* 4th grid box */}
        <div className="ring-1">
          <Image src="" alt="Home Image" width={300} height={300} />
        </div>
      </div>

      {/* Technologies we work with */}
      <div className="mt-14  grid gap-5 lg:grid-cols-2 lg:mt-20">
        {/* 1st grid box */}
        <div className=" grid grid-cols-3 col-span-1">
          <p className="grid-heading-with-primary-color col-span-3 leading-none ">
            Technologies <br /> we work with
          </p>
          <p className="text-gridTextColor lg:mt-10 col-span-2 lg:pr-8 mb-10 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
          <span className="row-start-3 col-span-2">
            <SlideButton title="View our tech stack" />
          </span>
        </div>
        {/* 2nd grid box */}
        <div className="col-span-1 ring-1">
          <Image src="" alt="Home Image" width={300} height={300} />
        </div>
        {/* 3nd grid box */}
        <div className="col-span-1 ring-1">
          <Image src="" alt="Home Image" width={300} height={300} />
        </div>
        {/* 4nd grid box */}
        <div className="col-span-1 ring-1">
          <Image src="" alt="Home Image" width={300} height={300} />
        </div>
      </div>

      {/* Our People */}
      <div className=" ring-1 lg:mt-20 grid gap-5 lg:grid-cols-4 ">
        <p className="grid-heading-with-primary-color col-span-2 ">
          Our People
        </p>
        <div className="col-span-2 grid place-items-center">
          <p className="text-gridTextColor  lg:pr-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
        </div>
        <div className="ring-1 col-span-1">
          <Image src="/ourPeople1.png" width={100} height={150} alt="CEO" />
          <p className="text-gridTextColor">Name LastName</p>
        </div>
        <div className="ring-1 col-span-1">
          <Image src="/ourPeople1.png" width={100} height={150} alt="CEO" />
          <p className="text-gridTextColor">Name LastName</p>
        </div>
        <div className="ring-1 col-span-1">
          <Image src="/ourPeople1.png" width={100} height={150} alt="CEO" />
          <p className="text-gridTextColor">Name LastName</p>
        </div>
        <div className="ring-1 col-span-1">
          <Image src="/ourPeople1.png" width={100} height={150} alt="CEO" />
          <p className="text-gridTextColor">Name LastName</p>
        </div>
        <div className="ring-1 col-span-1">
          <Image src="/ourPeople1.png" width={100} height={150} alt="CEO" />
          <p className="text-gridTextColor">Name LastName</p>
        </div>
        <div className="ring-1 col-span-1">
          <Image src="/ourPeople1.png" width={100} height={150} alt="CEO" />
          <p className="text-gridTextColor">Name LastName</p>
        </div>
        <div className="ring-1 col-span-1">
          <Image src="/ourPeople1.png" width={100} height={150} alt="CEO" />
          <p className="text-gridTextColor">Name LastName</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
