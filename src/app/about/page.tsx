import { ArrowRight, Target } from "lucide-react";
import React from "react";
import SlideButton from "../_components/SlideButton";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

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
  { fullName: "Ashutosh Tripathi", designation: "CEO", photo: "/ashu.jpeg", link: "https://www.linkedin.com/in/itszero8/" },
  { fullName: "Yaswanth Banomuddi", designation: "Full Stack Developer", photo: "/yaswanth.jpeg", link: "https://www.linkedin.com/in/yaswanthbonumaddi/" },
  { fullName: "Gnani Konda", designation: "Full Stack Developer", photo: "/ourPeople1.png", link: "https://www.linkedin.com/in/gnaneshwar-konda/" },
  { fullName: "Sri Hari Boya", designation: "Full Stack Developer", photo: "/srihari.jpeg", link: "https://www.linkedin.com/in/sri-hari-boya62/" },
  { fullName: "Neelima Banomuddi", designation: "Software Developer Intern", photo: "/neelima.jpeg", link: "https://www.linkedin.com/in/neelima-bonumaddi-015009352/" },
  { fullName: "Shubham Nautiyal", designation: "Software QA Developer Intern", photo: "/shubham.jpeg", link: "https://www.linkedin.com/in/shubham-nautiyal-436221313/" },
  { fullName: "Arun Aswal", designation: "Software QA Developer Intern", photo: "/arun.jpeg", link: "https://www.linkedin.com/in/arun-aswal-02a850126/" },
  { fullName: "Jaykrishna Poojari", designation: "Software QA Developer Intern", photo: "/ourPeople1.png", link: "https://www.linkedin.com/company/zero8dotdev/" },
  { fullName: "Naman Tripathi", designation: "Full Stack Developer", photo: "/namanCropped.jpeg", link: "https://www.linkedin.com/in/naman-tripathi-a53b43222/"},
  { fullName: "Rohit Koktare", designation: "Product Manager", photo: "/rohit.jpeg" , link: "https://www.linkedin.com/in/rohit-koktare/" },

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
            Our team reflects the vastness of India—from Dehradun’s northern serenity to Carnol’s southern charm, Maharashtra’s western energy, and beyond. This diversity sparks creativity and resilience, driving us to excel in a fully remote environment. We nurture a culture of collaboration, continuous learning, and innovation, reinforced by annual in-person meetups that celebrate our unity and shared goals.
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
          We harness the power of modern tools to deliver top-tier web applications. Our tech stack includes Node.js with TypeScript for robust backend logic, React for dynamic and responsive frontends, Supabase for seamless database management, Ant Design for intuitive UI, Vercel for swift deployments, PostgreSQL for secure data handling, and Google App Script for automation. This arsenal empowers us to build scalable, efficient, and user-focused solutions.
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
          At zero8.dev, we pride ourselves on a dynamic and diverse team of professionals hailing from every corner of India. Our CEO, Ashutosh Tripati, brings visionary leadership from the tranquil hills of Dehradun. Gnani Konda and Yaswanth Banumuddi, both from the vibrant south, fuel our full-stack development with their technical expertise and innovative spirit. Sri Hari Boya, from Carnol in the southern region, ensures our backend systems are rock-solid and scalable. Rohit Koktare, from the bustling state of Maharashtra, keeps our team seamlessly connected with his collaboration skills. Together, we embody India’s rich diversity, united by a passion for crafting exceptional software solutions.
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
                <Link href={mem.link} target="_black" >
                <Image
                  alt="linkedIn"
                  src="/linkedIn.png"
                  width={20}
                  height={20}
                  className="w-5 h-5 self-end"
                />

                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
