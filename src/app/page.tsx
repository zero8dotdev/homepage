import {
  First,
  Five,
  Fourth,
  Second,
  Testimonials,
  ContactsUs,
} from "./_components/sections";

export default function Home() {
  return (
    <main className="col-span-full">
      <First />
      <Second />
      <Fourth />
      <Five />
      <Testimonials />
      <ContactsUs />
    </main>
  );
}
