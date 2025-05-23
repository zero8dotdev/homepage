import Link from "next/link";
import MobileNav from "./mobilenav";
import Image from 'next/image'

export const navLinks = [
  { href: "/about", text: "About" },
  { href: "#contact", text: "Contact Us" },
  { href: "/work", text: "Work" },
];

const Header = () => {
  return (
    <>
      <header className="hidden border border-charcoal my-8 px-4 lg:flex col-span-full relative h-[64px]  justify-between items-center ">
        {/* <a className="text-[#cc4230]">&lt;zero8.dev&#47;&gt;</a> */}
        <Link href="/">
        <Image src="/zero8Logo copy.png" alt="logo" width={100} height={100} className="object-contain" />
        </Link>
        <ul className="bullet-none flex justify-center items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.href} className="hover:cursor-pointer">
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </header>
      <MobileNav />
    </>
  );
};

export default Header;
