"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./header";

const MobileNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="lg:hidden w-full flex flex-col col-span-full  ">
      <div className="self-end">
        {mobileMenuOpen ? (
          <X
            className=" "
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Close mobile menu"
          />
        ) : (
          <Menu
            className="w-10 "
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Open mobile menu"
          />
        )}
      </div>

      {mobileMenuOpen && (
        <div className="w-full h-full relative z-100">
          <ul className="absolute left-0 right-0 top-1 h-[100dvh] w-full backdrop-blur-lg z-50 pt-10 px-8 bullet-none flex flex-col justify-start items-start gap-y-4 text-3xl tetx-iconGreen">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="hover:cursor-pointer text-iconGreen"
              >
                <Link
                  href={link.href}
                  className="flex justify-center items-center gap-x-2"
                >
                  {link.text}
                  <Image
                    alt="rightarrow"
                    src="/sidebarIcon.png"
                    width={20}
                    height={20}
                    className="w-6 h-6"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default MobileNav;
