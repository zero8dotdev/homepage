import Image from "next/image";
import React from "react";

const Strategies = ({ keyStrategies }: { keyStrategies: any }) => {
  return (
    <div className="space-y-4 lg:space-y-0 lg:gap-6 lg:grid lg:grid-cols-8">
      <div className="grid grid-cols-2 lg:grid-cols-1 lg:flex-col gap-5 lg:col-span-2 lg:order-2">
        <div className="bg-charcoal space-y-3 p-3">
          <h1 className="text-[22px]">Tech Stack</h1>
          <div className="flex flex-wrap gap-3">
            <Image src="/stack.png" alt="tech-stack" width={54} height={54} />
            <Image src="/stack-1.png" alt="tech-stack" width={54} height={54} />
            <Image src="/stack-2.png" alt="tech-stack" width={54} height={54} />
            <Image src="/stack-3.png" alt="tech-stack" width={54} height={54} />
          </div>
        </div>
        <div className="bg-charcoal  space-y-3 p-3">
          <h1 className="text-[22px]">Services</h1>
          <div>
            <Image
              src="/mobile-icon.png"
              alt="service"
              width={24}
              height={24}
            />
            <p>Mobile App Development</p>
          </div>
          <div>
            <Image src="/web-icon.png" alt="service" width={24} height={24} />
            <p>web App Development</p>
          </div>
        </div>
      </div>

      <div className="bg-charcoal lg:col-span-4 relative lg:order-3  overflow-hidden p-6">
        <Image
          src="/service-picture.png"
          alt="service"
          width={400}
          height={400}
          objectFit="cover"
          layout="responsive"
          className="relative left-12  w-full"
        />
        <Image
          src="/service-picture.png"
          alt="service"
          objectFit="cover"
          layout="responsive"
          width={400}
          height={400}
          className="absolute top-14 sm:top-24 w-full"
        />
      </div>
      <div className="bg-charcoal lg:col-span-2 p-4">
        <h1 className="text-[22px]">Key Strategies</h1>
        <ul className="space-y-3">
          {keyStrategies?.map((e: any, i: number) => (
            <li key={i}>- {e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Strategies;
