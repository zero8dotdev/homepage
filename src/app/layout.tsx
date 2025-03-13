import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import { CSPostHogProvider } from "@/app/providers";
import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";

const assistant = Assistant({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "Home - Zero8.Dev",
  description: "We Build Elegant Websites.",
  openGraph: {
    title: "Zero8.Dev",
    description: "We Build Elegant Websites.",
    images: [
      {
        url: "/ogtest.jpg",
        width: 1200,
        height: 630,
        alt: "Zero8.Dev default image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero8.Dev",
    description: "We Build Elegant Websites.",
    images: ["/ogtest.jpg"],
  },
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
          <div className="container z-10 relative px-2  mx-auto grid grid-cols-2 lg:grid-cols-4 grid-rows-[64px_repeat(5,_minmax(400px,_1fr)_400px] gap-x-4 pt-4">
            <Header />
            {children}
            <Footer />
            <div className="absolute px-2  h-full mx-auto top-0 left-0 right-0 gap-x-4 z-[-1] grid grid-cols-2 lg:grid-cols-4">
              {[1, 2].map((each, i) => (
                <div key={i} className="border border-charcoal w-full"></div>
              ))}

              {[3, 4].map((each, i) => (
                <div
                  key={i + 2}
                  className="hidden lg:block  border border-charcoal w-full"
                ></div>
              ))}
            </div>
          </div>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
