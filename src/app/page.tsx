import { First, Fourth, Second, Third } from "./_components/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <First />
      <Second />
      <Third />
      <Fourth />
    </main>
  );
}
