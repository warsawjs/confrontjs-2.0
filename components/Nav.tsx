import React, { useState } from "react";
import logo from "../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(true)
  return (
    <section className="w-[100vw] flex flex-col lg:flex-row justify-between items-center px-10 py-4 font-bold text-sm text-black">
      <div className="w-[100vw] lg:w-[200px] flex flex-row justify-between px-10 py-4">
        <Link 
          href="/"
        >
          <Image src={logo} width={80} height={50} alt="logo"/>
        </Link>

        <AiOutlineMenu
          className="lg:hidden cursor-pointer w-5 h-5 "
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      <div className={`${menuOpen ? "flex" : "hidden"} flex-col lg:flex-row justify-between gap-6 lg:gap-10 items-center`}>

        <Link href="/schedule">SCHEDULE</Link>
        <Link href="/speakers">SPEAKERS</Link>
        <Link href="/venue">VENUE</Link>
        <Link href="/why-confrontjs">ABOUT</Link>
        <Link href="/">CALL FOR PAPERS</Link>
        <Link href="/">HELP</Link>
        
        <Link 
          /* will be replaced after setting up CMS */
          href="https://docs.google.com/forms/d/e/1FAIpQLSd4k9O91d66nfxxQG4N1HOrkBLczlQ7ZxaBkN7bnFU7omTB7A/viewform"
          className="px-6 py-4 bg-primary text-secondary rounded-2xl">
          BECOME A SPONSOR
        </Link>
        <Link 
          href="/buy-a-ticket"
          className="px-6 py-4 bg-tertiary text-white rounded-2xl"
        >
          BUY A TICKET
        </Link>
        
      </div>
    </section>
  );
}
