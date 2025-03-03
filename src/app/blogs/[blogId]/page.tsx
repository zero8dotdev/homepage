import Image from "next/image";
import React from "react";
import Credits from "./_components/credits";
import Strategies from "./_components/strategies";

const Page = ({ params }: { params: { blogId: string } }) => {
  const blogId = params.blogId;
  const blogs = [
    {
      id: 1,
      image: "/digital.png",
      title: "From Concept to Code: How we Build scalable Digital Solutions",
      credits: {
        name: "Amit Velankani",
        rol: "Tech Advisor and Front End Developer @Zero8.Dev",
        TLDR: "Using AI and putting smart analytics in the hands of entrepeneurs.Lorem ipsum dolor sit amet, consctetur adipiscing elit. Ut",
      },
      challenges:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecteture adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consetetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      techStack: ["stack.png", "stack.png-1", "stack.png-2", "stack.png-3"],
      images: "service-picture",
      strategies: [
        "Lorem ipsum dolor sit amet ,consecterur adipiscing elit.",
        "Lorem ipsum dolor sit amet , consecterur adipiscing elit.",
        "Lorem ipsum dolor sit amet , consecterur adipiscing elit.",
      ],

      textBlock:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecteture adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consetetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecterur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    },
    {
      id: 2,
      image: "/desk.png",
      title: "5 Tools Every Developer Should Have in Their Toolkit",
      credits: {
        name: "Amit Velankani",
        rol: "Tech Advisor and Front End Developer @Zero8.Dev",
        TLDR: "Using AI and putting smart analytics in the hands of entrepeneurs.Lorem ipsum dolor sit amet, consctetur adipiscing elit. Ut",
      },
      challenges:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecteture adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consetetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecterur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      techStack: ["stack.png", "stack.png-1", "stack.png-2", "stack.png-3"],
      images: "service-picture",
      strategies: [
        "Lorem ipsum dolor sit amet ,consecterur adipiscing elit.",
        "Lorem ipsum dolor sit amet , consecterur adipiscing elit.",
        "Lorem ipsum dolor sit amet , consecterur adipiscing elit.",
      ],

      textBlock:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecteture adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consetetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecterur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    },
    {
      id: 3,
      image: "/cloud.png",
      title: "Understanding the Cloud: A Develpers Perspective",
      credits: {
        name: "Amit Velankani",
        rol: "Tech Advisor and Front End Developer @Zero8.Dev",
        TLDR: "Using AI and putting smart analytics in the hands of entrepeneurs.Lorem ipsum dolor sit amet, consctetur adipiscing elit. Ut",
      },
      challenges:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecteture adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consetetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecterur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      techStack: ["stack.png", "stack.png-1", "stack.png-2", "stack.png-3"],
      images: "service-picture",
      strategies: [
        "Lorem ipsum dolor sit amet ,consecterur adipiscing elit.",
        "Lorem ipsum dolor sit amet , consecterur adipiscing elit.",
        "Lorem ipsum dolor sit amet , consecterur adipiscing elit.",
      ],

      textBlock:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecteture adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consetetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consecterur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    },
  ];

  const blog = blogs.find((e) => e.id === Number(blogId));
  const blogzDetails = blog ? blog : null;

  return (
    <div className="col-span-full p-4 h-auto space-y-5">
      <p className="text-textSecondary">Blogs</p>
      {/* heading */}
      <h1 className="text-[34px] text-primary letter">{blogzDetails?.title}</h1>
      <Credits credits={blogzDetails?.credits} />
      <div className="col-span-full bg-charcoal p-4">
        <h1 className="text-[22px]">The Challenge</h1>
        <p>{blogzDetails?.challenges}</p>
      </div>
      <Strategies keyStrategies={blogzDetails?.strategies} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Image
          alt="/image"
          src="/image.png"
          className="w-full"
          width={400}
          height={400}
        />
        <div className=" bg-charcoal p-4">
          <h1 className="text-[22px]">Another text block</h1>
          <p>{blogzDetails?.textBlock}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
