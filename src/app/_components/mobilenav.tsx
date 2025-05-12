"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./header";

const MobileNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="lg:hidden w-full flex flex-col col-span-full relative p-4">
      <div className="flex justify-between items-center w-full">
        <Link href="/">
        <Image
          src="/zero8Logo copy.png"
          alt="Zero8 Logo"
          width={120}
          height={80}
          className="object-contain"
        />
        
        </Link>
        {mobileMenuOpen ? (
          <X
            className="w-8 h-8 text-iconGreen"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Close mobile menu"
          />
        ) : (
          <Menu
            className="w-8 h-8 text-iconGreen"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Open mobile menu"
          />
        )}
      </div>

      {mobileMenuOpen && (
        <div className="w-full h-full relative z-50">
          <ul className="absolute left-0 right-0 top-0 h-[100dvh] w-full backdrop-blur-lg z-50 pt-24 px-8 flex flex-col justify-start items-start gap-y-4 text-2xl text-iconGreen">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="hover:cursor-pointer text-iconGreen"
              >
                <Link
                  href={link.href}
                  className="flex justify-start items-center gap-x-2"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                >
                  {link.text}
                  <Image
                    alt="rightarrow"
                    src="/sidebarIcon.png"
                    width={20}
                    height={20}
                    className="w-5 h-5"
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
