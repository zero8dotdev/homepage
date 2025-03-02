import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="col-span-full text-desc grid grid-rows-[auto_20px_auto] grid-cols-3 md:grid-cols-6 w-full text-base gap-x-4 mt-20 gap-y-8">
      <div className="flex flex-col font-extralight">
        <Link href="#" className="text-primary">
          Contact Us
        </Link>
        <Link href="#">hello@domain.com</Link>
        <Link href="#">+91 00000 00000</Link>
      </div>
      <div className="flex flex-col items-center">
        <Link href="#" className="text-primary">
          Social
        </Link>
        <Link href="#">Github</Link>
        <Link href="#">Twitter</Link>
        <Link href="#">Instagram</Link>
        <Link href="#">Youtube</Link>
      </div>
      <div className="flex flex-col items-end">
        <Link href="#" className="text-primary">
          More Zero8
        </Link>
        <Link href="#">Blog</Link>
        <Link href="#">Careers</Link>
      </div>
      <div className="row-start-2 col-span-1 text-center md:text-left  text-desc">
        (c) Zero8 2024
      </div>
      <div className="row-start-3 col-span-3 flex justify-center md:row-start-2 md:col-span-3 md:row-span-3 md:col-start-3 md:translate-x-10 lg:translate-x-20 xl:translate-x-40 md:-translate-y-14">
        <Image
          src="/footerlogodesk.png"
          alt="footer"
          width={150}
          height={50}
          className="text-desc"
          layout="responsive"
        />
      </div>
    </footer>
  );
};

export default Footer;
