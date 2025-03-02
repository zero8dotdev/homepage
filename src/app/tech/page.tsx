"use client";
import { useEffect, useState } from "react";

const TechnologyAnimation = () => {
  const [activeLogo, setActiveLogo] = useState<number>(0);

  const logos = [
    {
      name: "Next.js",
      img: "/nextjs.svg",
      top: "10px",
      left: "200px",
    },
    {
      name: "Supabase",
      img: "/supabase.svg",
      top: "150px",
      left: "50px",
    },
    {
      name: "Tailwind CSS",
      img: "/tailwindcss.svg",
      top: "300px",
      left: "200px",
    },
    {
      name: "HTML",
      img: "/html.svg",
      top: "150px",
      left: "350px",
    },
    {
      name: "CSS",
      img: "/css.svg",
      top: "350px",
      left: "100px",
    },
    {
      name: "JavaScript",
      img: "/javascript.svg",
      top: "400px",
      left: "250px",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo((prev) => (prev + 1) % logos.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div className="col-span-full relative w-full h-[500px] mx-auto bg-gray-50 p-4 rounded-lg shadow-lg">
      {logos.map((logo, index) => (
        <div
          key={logo.name}
          className={`absolute w-20 transition-opacity duration-500 ease-in-out transform ${
            activeLogo === index
              ? "opacity-100 scale-100"
              : "opacity-50 scale-75"
          }`}
          style={{ top: logo.top, left: logo.left }}
        >
          <img src={logo.img} alt={logo.name} className="w-full h-full" />
        </div>
      ))}
      {activeLogo === 1 && (
        <svg
          className="absolute h-10 w-10 text-black"
          style={{ top: "120px", left: "140px" }}
        >
          <line
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            stroke="black"
            strokeWidth="2"
            className="transition-all duration-500 ease-in-out"
          />
        </svg>
      )}
    </div>
  );
};

export default TechnologyAnimation;
