import {
  First,
  Five,
  Fourth,
  Second,
  Testimonials,
  ContactsUs,
  FeaturedProjects,
} from "./_components/sections";

export default function Home() {
  return (
    <main className="col-span-full space-y-10 lg:space-y-28 ">
      <First />
      <div className="">
        <Second />
      </div>
      <Fourth />
      <FeaturedProjects />
      <Five />
      <Testimonials />
      <ContactsUs />

      {/* <div className="relative w-full h-screen flex justify-center items-center bg-black">
        <div className="w-64 h-64 bg-onyx border-2 border-charcoal overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-onyx border-2 border-charcoal absolute"></div>

            <div className="w-3/4 h-3/4 bg-onyx border-2 border-charcoal absolute"></div>
            <div className="w-1/2 h-1/2 bg-onyx border-2 border-charcoal absolute"></div>
            <div className="w-1/4 h-1/4 bg-onyx border-2 border-charcoal absolute"></div>

            <div
              className="absolute border-t-2 border-charcoal"
              style={{
                top: "0",
                right: "0",
                width: "54%",
                transform: "rotate(-45deg)",
                transformOrigin: "top right",
              }}
            ></div>

            <div
              className="absolute border-t-2 border-charcoal"
              style={{
                top: "0",
                left: "0",
                width: "54%",
                transform: "rotate(45deg)",
                transformOrigin: "top left",
              }}
            ></div>

            <div
              className="absolute border-t-2 border-charcoal"
              style={{
                bottom: "0",
                right: "0",
                width: "54%",
                transform: "rotate(45deg)",
                transformOrigin: "bottom right",
              }}
            ></div>

            <div
              className="absolute border-t-2 border-charcoal"
              style={{
                bottom: "0",
                left: "0",
                width: "54%",
                transform: "rotate(-45deg)",
                transformOrigin: "bottom left",
              }}
            ></div>

            <div
              className="absolute border-r-2 border-charcoal"
              style={{
                top: "0%",
                left: "25%",
                width: "10%",
                height: "42%",
                transform: "rotate(-30deg)",
              }}
            ></div>
            <div
              className="absolute border-r-2 border-charcoal"
              style={{
                top: "0%",
                left: "40%",
                width: "10%",
                height: "38%",
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
              style={{
                top: "40%",
                right: "0%",
                height: "10%",
                width: "38%",
              }}
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
              style={{
                top: "40%",
                left: "0%",
                height: "10%",
                width: "38%",
              }}
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
    </main>
  );
}
