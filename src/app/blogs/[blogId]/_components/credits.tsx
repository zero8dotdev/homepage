import Image from "next/image";
import React from "react";

const Credits = ({ credits }: { credits: any }) => {
  return (
    <div className="grid grid-cols-6 lg:grid-cols-12 space-y-5">
      <div className="col-span-4 space-y-3 lg:w-1/2">
        <h1>Credits</h1>
        <div className="flex  lg:flex-col gap-x-2">
          <Image
            src="/avtar.png"
            alt="avator"
            width={100}
            height={100}
            className="w-14 h-14"
          />
          <div>
            <h1 className="font-normal">{credits.name}</h1>
            <p className="text-textSecondary">{credits.rol}</p>
          </div>
        </div>
      </div>
      <p className="col-span-2 lg:col-span-4 lg:order-3 text-textGreen ">
        January 3. 2025
      </p>

      <div className="col-span-full lg:col-span-4 lg:w-1/2">
        <h1>TLDR</h1>
        <p>{credits.TLDR}</p>
      </div>
    </div>
  );
};

export default Credits;
