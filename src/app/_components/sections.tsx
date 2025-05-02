import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Testimonials from "./testimonials";

const First = () => {
  return (
    <div className="ml-grid-content-spacing h-auto col-span-full ">
      <h1 className="primary-heading py-8 leading-none max-w-6xl ">
        Digital company building future forward software.
      </h1>

      <div className=" h-auto description-secondary grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 gap-x-4 gap-y-4  ">
        <p className="col-span-1 ">
          Building with Flutter, Rust. Fully DevSecOps Compliant work. Pluggable
          teams, which mean no overheads and short turnaround times from
          integration to delivery.
        </p>
        <p className="col-span-1 ">
          We are fully compliant working with all different kinds of DBs.
          Including Mongo, SQL, NoSQL.
        </p>
        <p className=" row-start-2  lg:row-start-auto col-span-1">
          10+ teams around the world are running 12 B2B software solutions
          designed and delivered by Zero8.Dev.
        </p>
        <div className=" ml-grid-content-spacing row-start-2 lg:row-start-auto col-span-1 flex justify-end items-center lg:items-end align-start">
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
    <section className="col-span-full grid grid-cols-4 h-auto bg-onyx ">
      <div className="relative col-span-3 border border-primary  text-primary text-[42px] lg:text-[96px] leading-none pt-2 before:content-['<div>'] before:absolute before:text-base before:bg-primary before:leading-none before:px-2 before:text-charcoal before:top-[-1.5rem] after:content-['</div>'] after:absolute after:text-base after:bg-primary after:leading-none after:px-2 after:text-charcoal after:bottom-[-1.5rem]">
        {/* Text on top */}
        <div className="relative z-10">
          <p>Frontend.</p>
          <p>Backend.</p>
          <p>End-to-end.</p>
        </div>

        {/* <div className="absolute inset-0 w-full h-full  z-[10] ">
          <div className="bg-onyx border-2 border-charcoal relative h-full">
            <div className="absolute inset-0 flex items-center justify-center h-full">
              <div className="w-full h-full bg-onyx border-2border-charcoal absolute"></div>
              <div className="w-3/4 h-3/4 bg-onyx border-2 border-charcoal absolute"></div>
              <div className="w-1/2 h-1/2 bg-onyx border-2 border-charcoal absolute"></div>
              <div className="w-1/4 h-1/4 bg-onyx border-2 border-charcoal absolute"></div>

              <div
                className="absolute border-t-2 border-charcoal"
                style={{
                  top: "0",
                  right: "0",
                  width: "39%",
                  transform: "rotate(-13deg)",
                  transformOrigin: "top right",
                }}
              ></div>
              <div
                className="absolute border-t-2 border-charcoal"
                style={{
                  top: "0",
                  left: "0",
                  width: "39%",
                  transform: "rotate(13deg)",
                  transformOrigin: "top left",
                }}
              ></div>
              <div
                className="absolute border-t-2 border-charcoal"
                style={{
                  bottom: "0",
                  right: "0",
                  width: "39%",
                  transform: "rotate(13deg)",
                  transformOrigin: "bottom right",
                }}
              ></div>
              <div
                className="absolute border-t-2 border-charcoal"
                style={{
                  bottom: "0",
                  left: "0",
                  width: "39%",
                  transform: "rotate(-13deg)",
                  transformOrigin: "bottom left",
                }}
              ></div>

              <div
                className="absolute border-t-2  border-charcoal"
                style={{
                  top: "0%",
                  left: "15%",
                  width: "25%",
                  height: "42%",
                  transform: "rotate(38deg)",
                }}
              ></div>
              <div
                className="absolute border border-t-2 border-red-500"
                style={{
                  top: "0%",
                  left: "30%",
                  width: "20%",
                  height: "45%",
                  transform: "rotate(38deg)",
                }}
              ></div>
              <div
                className="absolute border-l-2 border-charcoal"
                style={{
                  top: "0%",
                  right: "25%",
                  width: "10%",
                  height: "42%",
                  transform: "rotate(25deg)",
                }}
              ></div>

              <div
                className="absolute border-b-2 border-charcoal"
                style={{
                  top: "25%",
                  right: "0%",
                  height: "10%",
                  width: "42%",
                  transform: "rotate(-30deg)",
                }}
              ></div>
              <div
                className="absolute border-b-2 border-charcoal"
                style={{ top: "40%", right: "0%", height: "10%", width: "38%" }}
              ></div>
              <div
                className="absolute border-t-2 border-charcoal"
                style={{
                  bottom: "25%",
                  right: "0%",
                  height: "10%",
                  width: "42%",
                  transform: "rotate(25deg)",
                }}
              ></div>

              <div
                className="absolute border-r-2 border-charcoal"
                style={{
                  bottom: "0%",
                  left: "25%",
                  width: "10%",
                  height: "42%",
                  transform: "rotate(30deg)",
                }}
              ></div>
              <div
                className="absolute border-r-2 border-charcoal"
                style={{
                  bottom: "0%",
                  left: "40%",
                  width: "10%",
                  height: "38%",
                }}
              ></div>
              <div
                className="absolute border-l-2 border-charcoal"
                style={{
                  bottom: "0%",
                  right: "25%",
                  width: "10%",
                  height: "42%",
                  transform: "rotate(-25deg)",
                }}
              ></div>

              <div
                className="absolute border-b-2 border-charcoal"
                style={{
                  top: "25%",
                  left: "0%",
                  height: "10%",
                  width: "43%",
                  transform: "rotate(30deg)",
                }}
              ></div>
              <div
                className="absolute border-b-2 border-charcoal"
                style={{ top: "40%", left: "0%", height: "10%", width: "38%" }}
              ></div>
              <div
                className="absolute border-t-2 border-charcoal"
                style={{
                  bottom: "25%",
                  left: "0%",
                  height: "10%",
                  width: "42%",
                  transform: "rotate(-25deg)",
                }}
              ></div>
            </div>
          </div>
        </div> */}
      </div>
    </section>

    // <section className=" col-span-full grid grid-cols-4 h-auto">
    //   <div
    //     className="relative col-span-3 border border-primary
    //  text-primary text-[42px] lg:text-[96px] leading-none pt-2  before:content-['<div>'] before:absolute before:text-base before:bg-primary
    //   before:leading-none before:px-2 before:text-charcoal before:top-[-1.5rem] after:content-['</div>'] after:absolute after:text-base after:bg-primary after:leading-none
    //   after:px-2 after:text-charcoal after:bottom-[-1.5rem] "
    //   >
    //     <p>Frontend.</p>
    //     <p>Backend.</p>
    //     <p>End-to-end.</p>
    //     <div className="absolute inset-0 w-full left-0 right-0 h-full bg-red-400 opacity-20">
    //       {/* <div className="relative w-full h-screen flex justify-center items-center bg-black"> */}
    //       <div className="bg-onyx border-2 border-charcoal overflow-hidden relative">
    //         <div className="absolute inset-0 flex items-center justify-center">
    //           <div className="w-full h-full bg-onyx border-2 border-charcoal absolute"></div>

    //           <div className="w-3/4 h-3/4 bg-onyx border-2 border-charcoal absolute"></div>
    //           <div className="w-1/2 h-1/2 bg-onyx border-2 border-charcoal absolute"></div>
    //           <div className="w-1/4 h-1/4 bg-onyx border-2 border-charcoal absolute"></div>

    //           <div
    //             className="absolute border-t-2 border-charcoal"
    //             style={{
    //               top: "0",
    //               right: "0",
    //               width: "54%",
    //               transform: "rotate(-45deg)",
    //               transformOrigin: "top right",
    //             }}
    //           ></div>

    //           <div
    //             className="absolute border-t-2 border-charcoal"
    //             style={{
    //               top: "0",
    //               left: "0",
    //               width: "54%",
    //               transform: "rotate(45deg)",
    //               transformOrigin: "top left",
    //             }}
    //           ></div>

    //           <div
    //             className="absolute border-t-2 border-charcoal"
    //             style={{
    //               bottom: "0",
    //               right: "0",
    //               width: "54%",
    //               transform: "rotate(45deg)",
    //               transformOrigin: "bottom right",
    //             }}
    //           ></div>

    //           <div
    //             className="absolute border-t-2 border-charcoal"
    //             style={{
    //               bottom: "0",
    //               left: "0",
    //               width: "54%",
    //               transform: "rotate(-45deg)",
    //               transformOrigin: "bottom left",
    //             }}
    //           ></div>

    //           <div
    //             className="absolute border-r-2 border-charcoal"
    //             style={{
    //               top: "0%",
    //               left: "25%",
    //               width: "10%",
    //               height: "42%",
    //               transform: "rotate(-30deg)",
    //             }}
    //           ></div>
    //           <div
    //             className="absolute border-r-2 border-charcoal"
    //             style={{
    //               top: "0%",
    //               left: "40%",
    //               width: "10%",
    //               height: "38%",
    //             }}
    //           ></div>
    //           <div
    //             className="absolute border-l-2 border-charcoal"
    //             style={{
    //               top: "0%",
    //               right: "25%",
    //               width: "10%",
    //               height: "42%",
    //               transform: "rotate(25deg)",
    //             }}
    //           ></div>

    //           <div
    //             className="absolute border-b-2 border-charcoal"
    //             style={{
    //               top: "25%",
    //               right: "0%",
    //               height: "10%",
    //               width: "42%",
    //               transform: "rotate(-30deg)",
    //             }}
    //           ></div>
    //           <div
    //             className="absolute border-b-2 border-charcoal"
    //             style={{
    //               top: "40%",
    //               right: "0%",
    //               height: "10%",
    //               width: "38%",
    //             }}
    //           ></div>
    //           <div
    //             className="absolute border-t-2 border-charcoal"
    //             style={{
    //               bottom: "25%",
    //               right: "0%",
    //               height: "10%",
    //               width: "42%",
    //               transform: "rotate(25deg)",
    //             }}
    //           ></div>

    //           <div
    //             className="absolute border-r-2 border-charcoal"
    //             style={{
    //               bottom: "0%",
    //               left: "25%",
    //               width: "10%",
    //               height: "42%",
    //               transform: "rotate(30deg)",
    //             }}
    //           ></div>
    //           <div
    //             className="absolute border-r-2 border-charcoal"
    //             style={{
    //               bottom: "0%",
    //               left: "40%",
    //               width: "10%",
    //               height: "38%",
    //             }}
    //           ></div>
    //           <div
    //             className="absolute border-l-2 border-charcoal"
    //             style={{
    //               bottom: "0%",
    //               right: "25%",
    //               width: "10%",
    //               height: "42%",
    //               transform: "rotate(-25deg)",
    //             }}
    //           ></div>

    //           <div
    //             className="absolute border-b-2 border-charcoal"
    //             style={{
    //               top: "25%",
    //               left: "0%",
    //               height: "10%",
    //               width: "43%",
    //               transform: "rotate(30deg)",
    //             }}
    //           ></div>
    //           <div
    //             className="absolute border-b-2 border-charcoal"
    //             style={{
    //               top: "40%",
    //               left: "0%",
    //               height: "10%",
    //               width: "38%",
    //             }}
    //           ></div>
    //           <div
    //             className="absolute border-t-2 border-charcoal"
    //             style={{
    //               bottom: "25%",
    //               left: "0%",
    //               height: "10%",
    //               width: "42%",
    //               transform: "rotate(-25deg)",
    //             }}
    //           ></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

const Fourth = () => {
  return (
    <div className="ml-grid-content-spacing h-auto grid grid-rows-[auto_auto] grid-cols-4 gap-4 mt-12">
      <section className="col-span-4 lg:col-span-1">
        <h2 className="flex-nowrap border lg:border-none border-charcoal description-primary py-1">
          Phases of product we are involved in:
        </h2>
      </section>
      <section className="grid row-span-2 col-span-full grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10 ">
        <div className="col-span-1">
          <p className="h-9 w-9">
            <img src="/LightbulbFilament.png" />
          </p>
          <h2 className="my-2 description-primary">Ideation</h2>
          <div className="description-secondary">
            <p>We get to know your idea and vision.</p>
            <p>We understand the target audience.</p>
            <p>We identify problems we can solve for you and your users.</p>
            <p>We propose ways for differentiation.</p>
          </div>
        </div>
        <div className="col-span-1">
          <p className="h-9 w-9 ">
            <img src="/Headset.png" />
          </p>
          <h2 className="my-2 description-primary">Development</h2>
          <div className="description-secondary">
            <p>We get to know your idea and vision.</p>
            <p>We understand the target audience.</p>
            <p>We identify problems we can solve for you and your users.</p>
            <p>We propose ways for differentiation.</p>
          </div>
        </div>
        <div className="col-span-1">
          <p className="h-9 w-9 ">
            <img src="/SealCheck.png" />
          </p>
          <h2 className="my-2 description-primary">Quality Assurance</h2>
          <div className="description-secondary">
            <p>We get to know your idea and vision.</p>
            <p>We understand the target audience.</p>
            <p>We identify problems we can solve for you and your users.</p>
            <p>We propose ways for differentiation.</p>
          </div>
        </div>
        <div className="col-span-1">
          <p className="h-9 w-9 ">
            <img src="/CodeBlock.png" />
          </p>
          <h2 className="my-2 description-primary">Support & Maintenance</h2>
          <div className="description-secondary">
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
    <section className="col-span-full h-auto">
      <h2 className="secondary-heading leading-[96px]">Featured Projects</h2>
      <div className=" lg:grid lg:grid-rows-[90px_1fr_auto] lg:grid-cols-4 lg:gap-x-4">
        <div className="flex col-span-3 w-full justify-between">
          <h3 className="bg-primary translate-y-4 text-onyx h-full text-4xl flex justify-center items-center p-4">
            Health Plus
          </h3>
          <div className="hidden lg:flex justify-end lg:text-xl items-center lg:gap-x-2">
            <p className="bg-[#232323] py-4 px-6 rounded-full">View Js</p>
            <p className="bg-[#232323] py-4 px-6 rounded-full">MongoDB</p>
            <p className="bg-[#232323] py-4 px-6 rounded-full">React Js</p>
          </div>
        </div>

        <div className="lg:row-start-2 lg:col-span-3 lg:row-end-2">
          <Image
            src="/featureProject.png"
            alt="Featured Project"
            width={1200}
            height={600}
            layout="responsive"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-end text-base lg:hidden gap-x-2">
          <p className="bg-[#232323] py-4 px-6 rounded-full">View Js</p>
          <p className="bg-[#232323] py-4 px-6 rounded-full">MongoDB</p>
          <p className="bg-[#232323] py-4 px-6 rounded-full">React Js</p>
        </div>

        <div className="ml-grid-content-spacing col-span-1  my-4 lg:my-0 lg:pt-6 lg:row-start-2 lg:row-end-2 lg:space-y-6 lg:border-t border-[#CDFF41]">
          <p className="description-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla.
          </p>
          <div>
            <h1 className="text-2xl text-primary">120M</h1>
            <p className="description-secondary">Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h1 className="text-2xl text-primary">1500+</h1>
            <p className="description-secondary">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="lg:hidden border border-[#CDFF41] my-4"></div>

        <div className="flex border border-charcoal bg-onyx lg:bg-transparent lg:border-none p-2 lg:p-0 justify-between description-secondary lg:row-start-3 lg:col-span-3 lg:grid lg:grid-cols-3 lg:gap-x-4 lg:mt-6">
          <div className="space-y-1 lg:col-span-1">
            <Image
              src="/Vector.png"
              alt="iamge"
              className="h-5 w-5"
              width={500}
              height={500}
            ></Image>
            <p className=" leading-4">Service 1</p>
            <p className=" leading-4">Service 2</p>
            <p className=" leading-4">Service3</p>
          </div>
          <div className="lg:col-span-1">
            <Image
              src="/Vector1.png"
              alt="iamge"
              className="h-5 w-5"
              width={500}
              height={500}
            ></Image>
            <p>Industry name</p>
          </div>
          <div className="lg:col-span-1">
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
      {/* this one for onclick dots */}
      <div className="flex justify-center items-center mt-6 ">
        <div className="p-2 border border-charcoal flex gap-x-2 bg-onyx">
          <div className="w-4 h-4 rounded-full bg-primary "></div>
          <div className="w-4 h-4 rounded-full bg-primary"></div>
          <div className="w-4 h-4 rounded-full bg-primary"></div>
        </div>
      </div>
    </section>
  );
};
const Five = () => {
  return (
    <section className=" col-span-full space-y-8">
      <h2 className="ml-grid-content-spacing secondary-heading leading-tight lg:leading-[96px] col-span-full">
        The Zero8 difference
      </h2>
      <div className="grid col-span-full gap-4 grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2">
        <div className="bg-primary relative col-span-2 rounded p-2 lg:p-6 flex justify-between items-start lg:items-center gap-x-2">
          <div className="text-charcoal w-[60%] space-y-5 ">
            <h2 className="text-[22px] lg:text-4xl  whitespace-nowrap">
              Development Process
            </h2>
            <p className="text-base lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla.
            </p>
            <p className="my-4 text-base lg:text-xl">Learn More</p>
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
          <h4 className="third-heading">Support</h4>
          <p className="description-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla.
          </p>
        </div>
        <div className="bg-charcoal col-span-1 rounded p-2 lg:p-6 space-y-5">
          <h4 className="third-heading">Testing</h4>
          <p className="description-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla.
          </p>
        </div>
        <div className="bg-charcoal col-span-2 rounded p-2 lg:p-6 space-y-5">
          <h4 className="third-heading">Technology</h4>
          <p className="description-secondary">
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
          <h4 className="third-heading">Consulting / Strategy</h4>
          <p className="description-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla.
          </p>
        </div>

        <div className="bg-charcoal col-span-1 rounded p-2 lg:p-6 space-y-5">
          <h4 className="third-heading">Frameworks</h4>
          <p className="description-secondary">
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
    <section
      className="ml-grid-content-spacing col-span-full bg-onyx border border-charcoal lg:border-none lg:bg-transparent"
      id="contact"
    >
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
      <div className="my-8">
        <form className="space-y-4 flex flex-col justify-start ">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-description/70"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block p-2  bg-transparent rounded-md shadow-sm  focus:border-primary sm:text-sm"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-description/70"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block p-2  bg-transparent rounded-md shadow-sm  focus:border-primary sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-description/70"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block p-2  bg-transparent rounded-md shadow-sm  focus:border-primary sm:text-sm"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-description/70"
            >
              Tell us about your project/requirements
            </label>
            <textarea
              id="about"
              name="about"
              className="mt-1 block w-full p-2 bg-transparent rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Tell us something about you"
              required
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="file"
              className="block text-sm font-medium text-description/70"
            >
              Attach Files
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="mt-1  text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-primary file:text-white hover:file:bg-primary-dark"
              required
            />
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="terms"
                className="font-medium text-description/70"
              >
                I have read and agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  terms and conditions
                </a>
                .
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="self-end py-2 px-4 bg-primary text-description/70 font-semibold rounded-md 
              shadow-md focus:outline-none focus:ring-1 focus:ring-primary"
          >
            Submit
          </button>
        </form>
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
