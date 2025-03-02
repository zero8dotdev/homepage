import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import { CSPostHogProvider } from "@/app/providers";
import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";

const assistant = Assistant({ subsets: ["latin"], weight: "600" });

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
      <CSPostHogProvider>
        <body
          className={`${assistant.className} bg-onyx flex justify-center items-center`}
        >
          <div className="container p-2 lg:p-0 mx-auto grid grid-cols-4 grid-rows-[64px_repeat(5,_minmax(400px,_1fr)_400px] gap-x-4 pt-4">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
