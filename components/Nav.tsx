import React, { useState, useEffect } from "react";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const defaultProps = {
  callForPapers: process.env.NEXT_PUBLIC_CALLFORPAPERS,
};

export function Nav({ info = defaultProps }: any) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<String>("/");

  const handleLink = (e: String) => {
    setActiveLink(e);
    window.innerWidth < 1270 ? setMenuOpen(false) : "";
  };

  useEffect(() => {
    const pathname = window.location.pathname;
    setActiveLink(pathname);

    if (window.innerWidth < 1270) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1270) {
        setMenuOpen(false);
      } else {
        setMenuOpen(true);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <section className="flex flex-col lg:flex-row justify-between items-center px-10 py-4 font-bold text-sm text-black">
      <div className="w-full lg:w-[200px] flex flex-row justify-between items-center px-10 pb-6 lg:pb-4 py-4">
        <Link href="/" onClick={() => handleLink("/")}>
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
          onClick={() => handleLink("/schedule")}
        >
          SCHEDULE
        </Link>
        <Link
          className={`hover:text-primary uppercase transition-all duration-300 ease-in-out ${
            activeLink === "/speakers" ? "text-primary" : ""
          }`}
          href="/speakers"
          onClick={() => handleLink("/speakers")}
        >
          SPEAKERS
        </Link>
        <Link
          className={`hover:text-primary uppercase transition-all duration-300 ease-in-out ${
            activeLink === "/venue" ? "text-primary" : ""
          }`}
          href="/venue"
          onClick={() => handleLink("/venue")}
        >
          VENUE
        </Link>
        <Link
          className={`hover:text-primary uppercase transition-all duration-300 ease-in-out ${
            activeLink === "/why-confrontjs" ? "text-primary" : ""
          }`}
          href="/why-confrontjs"
          onClick={() => handleLink("/why-confrontjs")}
        >
          ABOUT
        </Link>
        {/* <Link
          className="hover:text-primary uppercase transition-all duration-300 ease-in-out"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdnBD9KUIS58ciXIXiUoNfvaN_DgHLoeg0QAwOex9YfOAdp0w/viewform"
          target="_blank"
          rel="noopener"
        >
          CALL FOR PROPOSALS
        </Link> */}
        <Link
          /* will be replaced after setting up CMS */
          href="https://drive.google.com/file/d/1TLIU-54ws6_PLD0b8tybB1tiwpRuSSYS/view?usp=drive_link"
          target="_blank"
          rel="noopener"
          className="font-bold px-6 py-4 bg-primary hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out text-white uppercase rounded-2xl"
        >
          BECOME A SPONSOR
        </Link>
        <Link
          onClick={() => handleLink("/buy-a-ticket")}
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
