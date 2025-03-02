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
    <main className="col-span-full space-y-12">
      <First />
      <div className="pt-10">
        <Second />
      </div>
      <Fourth />
      <FeaturedProjects />
      <Five />
      <Testimonials />
      <ContactsUs />
    </main>
  );
}
