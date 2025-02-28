import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function WorkSection() {
  return (
    <div className="bg-onyx text-white p-6 col-span-full">
      {/* Title */}
      <h2 className="text-4xl lg:text-6xl font-bold  text-stroke mb-8">Our life&apos;s work</h2>
    
      <div className="grid lg:grid-cols-4 gap-2 ">
        {["Region", "Industry", "Tech stack", "Services offered"].map(
          (filter, index) => (
            <div
              key={index}
              className="bg-charcoal text-white p-3 flex justify-between items-center cursor-pointer"
            >
              {filter}
              <span className="text-green">
                {" "}
                <ChevronDown /> 
              </span>
            </div>
          )
        )}
      </div>


      <div className="grid lg:grid-cols-2  gap-3 mt-10">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="relative">
            {/* Image */}
            <Image
            width={100}
            height={64}
              src="/images/cardPhoto.png"
              alt="Work"
              className="w-full h-64 object-cover"
            />


            <div className=" bottom-0 left-0 right-0 bg-black bg-opacity-80 p-4">
              <h3 className="text-lg text-white font-semibold">
                From Concept to Code: How We Build Scalable Digital Solutions
              </h3>
              <p className="text-sm text-primary">
                2 min read &nbsp; | &nbsp; 6 January 2025
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
