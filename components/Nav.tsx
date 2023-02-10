import React, { useState, useEffect } from "react";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const defaultProps = {
  callForPapers: process.env.NEXT_PUBLIC_CALLFORPAPERS,
};

export function Nav({ info = defaultProps }: any) {
  const [menuOpen, setMenuOpen] = useState(true);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const pathname = window.location.pathname;
    setMenuOpen(true);
    setActiveLink(pathname);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row justify-between items-center px-10 py-4 font-bold text-sm text-black">
      <div className="w-full lg:w-[200px] flex flex-row justify-between items-center px-10 pb-6 lg:pb-4 py-4">
        <Link href="/" onClick={() => setActiveLink("/")}>
          <Image src={logo} width={80} height={50} alt="logo" />
        </Link>

        <AiOutlineMenu
          className="lg:hidden cursor-pointer w-5 h-5 "
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col lg:flex-row justify-between gap-6 lg:gap-10 items-center`}
      >
        <Link
          className={`hover:text-primary uppercase transition-all duration-300 ease-in-out ${
            activeLink === "/schedule" ? "text-primary" : ""
          }`}
          href="/schedule"
          onClick={() => setActiveLink("/schedule")}
        >
          SCHEDULE
        </Link>
        <Link
          className={`hover:text-primary uppercase transition-all duration-300 ease-in-out ${
            activeLink === "/speakers" ? "text-primary" : ""
          }`}
          href="/speakers"
          onClick={() => setActiveLink("/speakers")}
        >
          SPEAKERS
        </Link>
        <Link
          className={`hover:text-primary uppercase transition-all duration-300 ease-in-out ${
            activeLink === "/venue" ? "text-primary" : ""
          }`}
          href="/venue"
          onClick={() => setActiveLink("/venue")}
        >
          VENUE
        </Link>
        <Link
          className={`hover:text-primary uppercase transition-all duration-300 ease-in-out ${
            activeLink === "/why-confrontjs" ? "text-primary" : ""
          }`}
          href="/why-confrontjs"
          onClick={() => setActiveLink("/why-confrontjs")}
        >
          ABOUT
        </Link>
        <Link
          className="hover:text-primary uppercase transition-all duration-300 ease-in-out"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdnBD9KUIS58ciXIXiUoNfvaN_DgHLoeg0QAwOex9YfOAdp0w/viewform"
        >
          CALL FOR PROPOSALS
        </Link>
        <Link
          /* will be replaced after setting up CMS */
          href="https://docs.google.com/forms/d/e/1FAIpQLSd4k9O91d66nfxxQG4N1HOrkBLczlQ7ZxaBkN7bnFU7omTB7A/viewform"
          className="font-bold px-6 py-4 bg-primary hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out text-white uppercase rounded-2xl"
        >
          BECOME A SPONSOR
        </Link>
        <Link
          href="/buy-a-ticket"
          className="font-bold px-6 py-4 bg-tertiary text-secondary uppercase hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out rounded-2xl"
        >
          BUY A TICKET
        </Link>
      </div>
    </section>
  );
}

export default Nav;
