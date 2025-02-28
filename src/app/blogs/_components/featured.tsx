import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="bg-charcoal">
      <Image
        src="/yoga.png"
        alt="yoga"
        width={0}
        height={0}
        className="w-full"
        layout="responsive"
        objectFit="cover"
      />
      <div className="px-4 py-4 grid lg:grid-cols-4">
        <h1 className="text-[22px] md:col-span-3 ">
          Headline : Enabling this bootstrapped brand set up end-to-end business
          solution.
        </h1>
        <p className=" lg:col-span-1 lg:text-right font-extralight text-textSecondary">
          {" "}
          2 min read
        </p>
      </div>
    </div>
  );
};

export default Featured;
