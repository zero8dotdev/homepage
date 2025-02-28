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
    <main className="col-span-full">
      <First />
      <Second />
      <Fourth />
      <FeaturedProjects />
      <Five />
      <Testimonials />
      <ContactsUs />
    </main>
  );
}
