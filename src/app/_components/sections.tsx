import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Testimonials from "./testimonials";

const First = () => {
  return (
    <div className="h-auto col-span-full">
      <h1 className="text-primary text-[55px] lg:text-[128px] py-8 leading-none">
        Digital company building future forward software.
      </h1>

      <div className="h-auto text-base grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 gap-x-6 gap-y-6  text-description">
        <p className="col-span-1 font-extralight">
          Building with Flutter, Rust. Fully DevSecOps Compliant work. Pluggable
          teams, which mean no overheads and short turnaround times from
          integration to delivery.
        </p>
        <p className="col-span-1 font-extralight">
          We are fully compliant working with all different kinds of DBs.
          Including Mongo, SQL, NoSQL.
        </p>
        <p className=" row-start-2 font-extralight lg:row-start-auto col-span-1">
          10+ teams around the world are running 12 B2B software solutions
          designed and delivered by Zero8.Dev.
        </p>
        <div className="row-start-2 lg:row-start-auto col-span-1 flex justify-end items-center lg:items-end align-start">
          <button className="bg-primary text-charcoal  px-4 py-2 flex justify-around ">
            Build Now
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const Second = () => {
  return (
    <section
      className="col-span-full grid border border-primary
     text-primary text-[42px] lg:text-[96px] leading-none pt-2 relative before:content-['<div>'] before:absolute before:text-base before:bg-primary
      before:leading-none before:px-2 before:text-charcoal before:top-[-1.5rem] after:content-['</div>'] after:absolute after:text-base after:bg-primary after:leading-none 
      after:px-2 after:text-charcoal after:bottom-[-1.5rem] "
    >
      <p>Frontend.</p>
      <p>Backend.</p>
      <p>End-to-end.</p>
    </section>
  );
};

const Fourth = () => {
  return (
    <div className=" h-auto grid grid-rows-[auto_auto] grid-cols-4 gap-4 mt-12">
      <section className="col-span-4 lg:col-span-1">
        <h2>Phases of product we are involved in</h2>
      </section>
      <section className="grid row-span-2 col-span-full grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10 ">
        <div className="col-span-1">
          <p className="h-9 w-9">
            <img src="/LightbulbFilament.png" />
          </p>
          <h4 className="my-2 text-2xl  font-bold">Ideation</h4>
          <div className="font-extralight text-description">
            <p className="text-base leading-4">
              We get to know your idea and vision.
            </p>
            <p>We understand the target audience.</p>
            <p>We identify problems we can solve for you and your users.</p>
            <p>We propose ways for differentiation.</p>
          </div>
        </div>
        <div className="text col-span-1">
          <p className="h-9 w-9 ">
            <img src="/Headset.png" />
          </p>
          <h4 className="my-2 text-2xl font-bold">Development</h4>
          <div className="font-extralight text-description">
            <p>We get to know your idea and vision.</p>
            <p>We understand the target audience.</p>
            <p>We identify problems we can solve for you and your users.</p>
            <p>We propose ways for differentiation.</p>
          </div>
        </div>
        <div className="text col-span-1">
          <p className="h-9 w-9 ">
            <img src="/SealCheck.png" />
          </p>
          <h4 className="my-2 text-2xl font-bold">Quality Assurance</h4>
          <div className="font-extralight text-description">
            <p>We get to know your idea and vision.</p>
            <p>We understand the target audience.</p>
            <p>We identify problems we can solve for you and your users.</p>
            <p>We propose ways for differentiation.</p>
          </div>
        </div>
        <div className="text col-span-1">
          <p className="h-9 w-9 ">
            <img src="/CodeBlock.png" />
          </p>
          <h4 className="my-2 text-2xl font-bold">Support & Maintenance</h4>
          <div className="font-extralight text-description">
            <p>We get to know your idea and vision.</p>
            <p>We understand the target audience.</p>
            <p>We identify problems we can solve for you and your users.</p>
            <p>We propose ways for differentiation.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
const FeaturedProjects = () => {
  return (
    <section className="col-span-full px-2 h-auto">
      <h2 className="text-primary text-[42px] lg:text-[96px] leading-[96px]">
        Featured Projects
      </h2>
      <div className="lg:grid lg:grid-rows-[90px_1fr_auto_120px] lg:grid-cols-[70%_20%_10%] lg:gap-x-4">
        <div className="flex  w-full justify-between">
          <h3 className="bg-primary translate-y-4 text-onyx h-full text-4xl flex justify-center items-center p-4">
            Health Plus
          </h3>
          <div className="hidden lg:flex justify-end items-center lg:gap-x-2">
            <p className="bg-[#232323] py-4 px-6 rounded-full">View Js</p>
            <p className="bg-[#232323] py-4 px-6 rounded-full">MongoDB</p>
            <p className="bg-[#232323] py-4 px-6 rounded-full">React Js</p>
          </div>
        </div>

        <div className="lg:row-start-2 lg:col-span-1 lg:row-end-2">
          <Image
            src="/featureProject.png"
            alt="Featured Project"
            width={1200}
            height={600}
            layout="responsive"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-end lg:hidden gap-x-2">
          <p className="bg-[#232323] py-4 px-6 rounded-full">View Js</p>
          <p className="bg-[#232323] py-4 px-6 rounded-full">MongoDB</p>
          <p className="bg-[#232323] py-4 px-6 rounded-full">React Js</p>
        </div>

        <div className="text-description font-extralight my-4 lg:my-0 lg:pt-6 lg:row-start-2 lg:row-end-2 lg:space-y-6 lg:border-t border-[#CDFF41]">
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla.
          </p>
          <div>
            <h1 className="text-2xl text-primary">120M</h1>
            <p className="text-description font-extralight text-base">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-primary">1500+</h1>
            <p className="text-description font-extralight text-base">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="hidden  lg:flex row-start-2 col-span-1  justify-center items-center w-full text-3xl">
          <div className="bg-[#232323] p-4 m-auto rounded-full flex justify-center items-center">
            <Image
              src="/rightarrow.png"
              alt="rightArrow"
              width={10}
              height={10}
              className=""
            />
          </div>
        </div>
        <div className="lg:hidden border border-[#CDFF41] my-4"></div>

        <div className="flex justify-between text-description font-extralight lg:row-start-3 lg:col-span-1 lg:mt-6">
          <div className="space-y-1">
            <Image
              src="/Vector.png"
              alt="iamge"
              className="h-5 w-5"
              width={500}
              height={500}
            ></Image>
            <p className="text-base leading-4">Service 1</p>
            <p className="text-base leading-4">Service 2</p>
            <p className="text-base leading-4">Service3</p>
          </div>
          <div className="text  ">
            <Image
              src="/Vector1.png"
              alt="iamge"
              className="h-5 w-5"
              width={500}
              height={500}
            ></Image>
            <p>Industry name</p>
          </div>
          <div className="text ">
            <Image
              src="/Vector2.png"
              alt="iamge"
              className="h-5 w-5"
              width={500}
              height={500}
            ></Image>
            <p>IMEA + North America</p>
          </div>
        </div>
      </div>
    </section>
  );
};
const Five = () => {
  return (
    <section className="">
      <h2 className=" text-primary text-[42px] lg:text-[96px] leading-tight lg:leading-[96px] col-span-full mb-8">
        The Zero8.Dev difference
      </h2>
      <div className="grid col-span-full gap-4 grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2">
        <div className="bg-primary relative col-span-2 rounded p-2 lg:p-6 flex justify-between items-start lg:items-center gap-x-2">
          <div className="text-charcoal w-[60%] space-y-5 ">
            <h2 className="text-[22px] font-extrabold whitespace-nowrap">
              Development Process
            </h2>
            <p className="text-base font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla.
            </p>
            <p className="my-4">Learn More</p>
          </div>
          <div className="self-end w-[40%] flex justify-end items-end">
            <Image
              alt="develop"
              src="/developprocess.png"
              className=" translate-x-1 translate-y-2 lg:translate-x-6 lg:translate-y-10 "
              width={100}
              height={100}
              layout="responsive"
            />
            {/* <img
              src="/developprocess.png"
              alt="develop"
              className=" translate-x-6 translate-y-10 "
            /> */}
          </div>
        </div>
        <div className="bg-charcoal col-span-1 rounded p-2 lg:p-6 space-y-5">
          <h4 className="font-bold text-[22px]">Support</h4>
          <p className="text-base font-extralight text-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla.
          </p>
        </div>
        <div className="bg-charcoal col-span-1 rounded p-2 lg:p-6 space-y-5">
          <h4 className="font-bold text-[22px]">Testing</h4>
          <p className="text-base font-extralight text-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla.
          </p>
        </div>
        <div className="bg-charcoal col-span-2 rounded p-2 lg:p-6 space-y-5">
          <h4 className="font-bold text-[22px]">Technology</h4>
          <p className="text-base font-extralight text-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla.
          </p>
          {/* <Image
            src="/rocket.png"
            alt="develop"
            className="object-contain"
            width={300}
            height={200}
          /> */}
          <div className="flex w-full justify-center items-center ">
            <img src="/rocket.png" alt="develop" className="" />
          </div>
        </div>
        <div className="bg-charcoal col-span-1 rounded p-2 lg:p-6 space-y-5">
          <h4 className="font-bold text-[22px]">Consulting / Strategy</h4>
          <p className="text-base font-extralight text-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla.
          </p>
        </div>

        <div className="bg-charcoal col-span-1 rounded p-2 lg:p-6 space-y-5">
          <h4 className="font-bold text-[22px]">Frameworks</h4>
          <p className="text-base font-extralight text-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla.
          </p>
        </div>
      </div>
    </section>
  );
};

const ContactsUs = () => {
  return (
    <section className="col-span-full">
      <h3 className="text-[42px] lg:text-[96px] leading-[96px]">
        With Us, <span className="text-primary">it happens.</span>
      </h3>
      <p className="text-[22px] lg:text-[36px] lg:leading-[40px]">
        Tell us what you want to build and we will get back to you.
      </p>
      <p className="py-2 lg:py-4">I am interested in:</p>
      <div className="flex gap-2 lg:gap-4 flex-wrap">
        <button className="border-[2px] rounded-full p-2 lg:p-3 border-primary text-primary">
          Site from scratch
        </button>
        <button className="border-[2px] rounded-full p-2 lg:p-3 border-primary text-primary">
          UI/UX Design
        </button>
        <button className="border-[2px] rounded-full p-2 lg:p-3 border-primary text-primary">
          Product Design
        </button>
        <button className="border-[2px] rounded-full p-2 lg:p-3 border-primary text-primary">
          Website flow
        </button>
        <button className="border-[2px] rounded-full p-2 lg:p-3 border-primary text-primary">
          Mobile Developement
        </button>
        <button className="border-[2px] rounded-full p-2 lg:p-3 border-primary text-primary">
          Backend Pluggable Team
        </button>
        <button className="border-[2px] rounded-full p-2 lg:p-3 border-primary text-primary">
          Frontend Pluggable Team
        </button>
      </div>
    </section>
  );
};

export {
  First,
  Second,
  Fourth,
  Five,
  Testimonials,
  ContactsUs,
  FeaturedProjects,
};
