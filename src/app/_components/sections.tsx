const First = () => {
  return (
    <div className="h-auto col-span-full">
      <h1 className="text-primary text-[128px] py-8 leading-none">
        Digital company building future forward software.
      </h1>
      <div className="h-auto grid grid-cols-4 grid-rows-1 gap-x-4 font-normal">
        <p className="col-span-1">
          Building with Flutter, Rust. Fully DevSecOps Compliant work. Pluggable
          teams, which mean no overheads and short turnaround times from
          integration to delivery.
        </p>
        <p className="col-span-1">
          We are fully compliant working with all different kinds of DBs.
          Including Mongo, SQL, NoSQL.
        </p>
        <p className="col-span-1">
          10+ teams around the world are running 12 B2B software solutions
          designed and delivered by Zero8.Dev.
        </p>
        <div className="col-span-1 flex justify-end align-start">
          <button className="bg-primary text-charcoal px-4 py-2">
            Build Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Second = () => {
  return (
    <section className="my-12 h-auto col-span-full grid border-[1.5px] border-primary text-primary text-[96px] leading-none pt-2 relative before:content-['<div>'] before:absolute before:text-base before:bg-primary before:leading-none before:px-2 before:text-charcoal before:top-[-1.5rem] after:content-['</div>'] after:absolute after:text-base after:bg-primary after:leading-none after:px-2 after:text-charcoal after:bottom-[-1.5rem]">
      <p>Frontend.</p>
      <p>Backend.</p>
      <p>End-to-end.</p>
    </section>
  );
};

const Fourth = () => {
  return (
    <div className="h-auto grid grid-rows-[auto_auto] grid-cols-4 gap-4 border-[1px] my-12">
      <section className="col-span-1 border-[1px]">
        <h2>Phases of product we are involved in</h2>
      </section>
      <section className="grid row-span-2 col-span-full grid-cols-4 gap-4 border-red-500">
        <div className="col-span-1">
          <p className="h-9 w-9 border-[1px]"></p>
          <h4 className="my-2 text-2xl">Ideation</h4>
          <p className="text-base leading-4">
            We get to know your idea and vision.
          </p>
          <p>We understand the target audience.</p>
          <p>We identify problems we can solve for you and your users.</p>
          <p>We propose ways for differentiation.</p>
        </div>
        <div className="text col-span-1">
          <p className="h-9 w-9 border-[1px]"></p>
          <h4 className="my-2 text-2xl">Development</h4>
          <p>We get to know your idea and vision.</p>
          <p>We understand the target audience.</p>
          <p>We identify problems we can solve for you and your users.</p>
          <p>We propose ways for differentiation.</p>
        </div>
        <div className="text col-span-1">
          <p className="h-9 w-9 border-[1px]"></p>
          <h4 className="my-2 text-2xl">Quality Assurance</h4>
          <p>We get to know your idea and vision.</p>
          <p>We understand the target audience.</p>
          <p>We identify problems we can solve for you and your users.</p>
          <p>We propose ways for differentiation.</p>
        </div>
        <div className="text col-span-1">
          <p className="h-9 w-9 border-[1px]"></p>
          <h4 className="my-2 text-2xl">Support & Maintenance</h4>
          <p>We get to know your idea and vision.</p>
          <p>We understand the target audience.</p>
          <p>We identify problems we can solve for you and your users.</p>
          <p>We propose ways for differentiation.</p>
        </div>
      </section>
    </div>
  );
};

const Five = () => {
  return (
    <>
      <h2 className="text-primary text-[96px] leading-[96px] col-span-full my-8">
        The Zero8.Dev difference
      </h2>
      <section className="h-[500px] grid col-span-full gap-4 grid-cols-4 grid-rows-2">
        <div className="bg-primary col-span-2 rounded p-6">
          <h4>Development Process</h4>
        </div>
        <div className="bg-charcoal col-span-1 rounded p-6">
          <h4>Support</h4>
        </div>
        <div className="bg-charcoal col-span-1 rounded p-6">
          <h4>Testing</h4>
        </div>
        <div className="bg-charcoal col-span-1 rounded p-6">
          <h4>Consulting / Strategy</h4>
        </div>
        <div className="bg-charcoal col-span-2 rounded p-6">
          <h4>Technology</h4>
        </div>
        <div className="bg-charcoal col-span-1 rounded p-6">
          <h4>Frameworks</h4>
        </div>
      </section>
    </>
  );
};

const Testimonials = () => {
  return (
    <section className="col-span-full grid grid-cols-3 gap-4 py-20">
      <div className="h-56 bg-charcoal rounded"></div>
      <div className="h-56 bg-charcoal rounded"></div>
      <div className="h-56 bg-charcoal rounded"></div>
    </section>
  );
};

const ContactsUs = () => {
  return (
    <section className="col-span-full">
      <h3 className="text-[96px] leading-[96px]">
        With Us, <span className="text-primary">it happens.</span>
      </h3>
      <p className="text-[36px] leading-[40px]">
        Tell us what you want to build and we will get back to you.
      </p>
      <p className="py-4">I am interested in:</p>
      <div className="flex gap-4 flex-wrap">
        <button className="border-[2px] rounded-full p-3 border-primary text-primary">
          Site from scratch
        </button>
        <button className="border-[2px] rounded-full p-3 border-primary text-primary">
          UI/UX Design
        </button>
        <button className="border-[2px] rounded-full p-3 border-primary text-primary">
          Product Design
        </button>
        <button className="border-[2px] rounded-full p-3 border-primary text-primary">
          Website flow
        </button>
        <button className="border-[2px] rounded-full p-3 border-primary text-primary">
          Mobile Developement
        </button>
        <button className="border-[2px] rounded-full p-3 border-primary text-primary">
          Backend Pluggable Team
        </button>
        <button className="border-[2px] rounded-full p-3 border-primary text-primary">
          Frontend Pluggable Team
        </button>
      </div>
    </section>
  );
};

export { First, Second, Fourth, Five, Testimonials, ContactsUs };
