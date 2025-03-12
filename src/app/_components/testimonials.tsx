"use client";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialList = [
    {
      title: `"Zero8 got our MVP up and running in virtually no time."`,
      author: "Vex Lexter, Aerotropic",
    },
    {
      title: `"Zero8 got our MVP up and running in virtually no time."`,
      author: "Vex Lexter, Aerotropic",
    },
    {
      title: `“Could not have deployed our vision better or sooner without Zero8.”`,
      author: "Wren Tedder, Navajo",
    },
  ];

  const handleScroll = () => {
    if (testimonialsRef.current) {
      const scrollLeft = testimonialsRef.current.scrollLeft;
      const width = testimonialsRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollTo({
        left: index * testimonialsRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const ref = testimonialsRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (ref) {
        ref.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section className="mb-4 col-span-1 h-auto" aria-label="Testimonials">
      <h2 className="sr-only">Testimonials</h2>{" "}
      <div
        className="font-extralight flex w-full overflow-x-hidden snap-x 
          snap-mandatory lg:grid lg:grid-cols-3 lg:gap-x-4"
        ref={testimonialsRef}
        role="region"
        aria-label="Customer testimonials carousel"
      >
        {testimonialList.map((testimonial, index) => (
          <article
            key={index}
            className="min-w-full p-2 h-56 bg-charcoal rounded text-description/70 
              text-base lg:text-xl flex flex-col justify-center items-center 
              snap-center lg:p-4"
          >
            <blockquote>
              <p>{testimonial.title}</p>
            </blockquote>
            <cite className="text-base text-right">- {testimonial.author}</cite>
          </article>
        ))}
      </div>
      <div className="flex justify-center gap-x-2 my-4 lg:hidden">
        {testimonialList.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === activeIndex ? "bg-iconGreen" : "bg-description"
            } cursor-pointer`}
            aria-label={`Go to testimonial ${index + 1}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
