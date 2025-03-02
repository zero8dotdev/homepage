"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="hidden lg:flex col-span-full relative h-[64px]  justify-between items-center ">
        <a className="text-[#cc4230]">&lt;zero8.dev&#47;&gt;</a>
        <ul className="bullet-none flex justify-center items-center space-x-8">
          <li className="hover:cursor-pointer">About</li>
          <li className="hover:cursor-pointer">Contact Us</li>
          <li className="hover:cursor-pointer">Work</li>
        </ul>
      </header>

      <header className="lg:hidden w-full flex flex-col col-span-full  ">
        <div className="self-end">
          {mobileMenuOpen ? (
            <X
              className=" "
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            />
          ) : (
            <Menu
              className="w-10 "
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            />
          )}
        </div>

        {mobileMenuOpen && (
          <div className="w-full h-full relative z-100">
            <ul className="absolute left-0 right-0 top-1 h-[100dvh] w-full backdrop-blur-lg z-50 pt-10 px-8 bullet-none flex flex-col justify-start items-start gap-y-4 text-3xl tetx-menuIcon">
              <li className="hover:cursor-pointer text-menuIcon flex justify-center items-center gap-x-2">
                About
                <Image
                  alt="rightarrow"
                  src="/sidebarIcon.png"
                  width={20}
                  height={20}
                  className="w-6 h-6"
                />
              </li>
              <li className="hover:cursor-pointer text-menuIcon flex justify-center items-center gap-x-2">
                Contact Us
                <Image
                  alt="rightarrow"
                  src="/sidebarIcon.png"
                  width={20}
                  height={20}
                  className="w-6 h-6"
                />
              </li>
              <li className="hover:cursor-pointer text-menuIcon flex justify-center items-center gap-x-2">
                Work
                <Image
                  alt="rightarrow"
                  src="/sidebarIcon.png"
                  width={20}
                  height={20}
                  className="w-6 h-6"
                />
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
