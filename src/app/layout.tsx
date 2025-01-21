import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import { CSPostHogProvider } from "@/app/providers";
import "./globals.css";
import Header from "./_components/header";

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
        <body className={`${assistant.className} bg-onyx`}>
          <div className="container mx-auto grid grid-cols-4 grid-rows-[64px_repeat(5,_minmax(400px,_1fr)_400px] gap-4">
            <Header />
            {children}
          </div>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
