import type { Metadata } from "next";
import { Inter, Domine } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

const inter = Inter({ subsets: ["latin"] });
const domine = Domine({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zero8.Dev",
  description: "Building elegant web experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${domine.className} bg-white text-[--foreground-rgb]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
