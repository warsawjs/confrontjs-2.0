import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "../../public/logo.png";

type Props = {
  variant: string;
  info: any;
};

export default function Hero({ variant, info }: Props) {
  const isMain = variant === "main";
  const isSchedule = variant === "schedule";
  const isSpeakers = variant === "speakers";
  const isTicket = variant === "ticket";
  const isVenue = variant === "venue";
  const isAbout = variant === "about";

  const wrapperClass =
    "flex flex-col items-center gap-5 text-sm text-center lg:text-base";
  const whiteTextClass = "text-sm text-white lg:text-3xl";
  const boldTextClass =
    "text-3xl font-bold uppercase lg:text-7xl text-tertiary";
  const linkClass =
    "px-6 py-4 text-xs font-bold text-black uppercase transition-all duration-300 ease-in-out border-2 lg:text-xl hover:bg-secondary hover:text-black rounded-2xl";

  return (
    <div className="flex flex-col items-center gap-5 py-20 text-center">
      {isMain && (
        <div className={wrapperClass}>
          <div className="h-32 mb-10 w-44 lg:w-72 lg:h-64">
            <Image
              className="w-full"
              src={logo}
              width={1000}
              height={1000}
              alt="logo"
            />
          </div>
          <h3 className="text-sm font-bold lg:text-xl">
            Are you ready to take your JavaScript skills to the next level?
          </h3>
          <h2 className={whiteTextClass}>
            12th of April 2024 - Warsaw, Poland
          </h2>
          <h1 className="w-72 lg:w-[740px] font-bold text-xl lg:text-4xl text-tertiary uppercase">
            EMPOWERING THE NEXT GENERATION OF FRONT-END PROFESSIONALS
          </h1>
          <div className="flex flex-col gap-5 py-10 lg:flex-row">
            <Link
              href={info.sponsorLink}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              BECOME A SPONSOR
            </Link>
            <Link
              href="/buy-a-ticket"
              className={`${linkClass} text-white bg-tertiary border-none`}
            >
              BUY A TICKET
            </Link>
          </div>
          <p className="w-80 lg:w-[1000px]">
            Welcome to the Front-End Conference! Join industry leaders and
            developers to learn about the latest front-end technologies and
            trends. <br />
            Get ready to take your skills to the next level. Let's learn and
            connect together.
          </p>
        </div>
      )}

      {(isSchedule || isSpeakers) && (
        <div className={wrapperClass}>
          <p className={whiteTextClass}>
            {isSchedule
              ? "12 April 2024 in Warsaw, Poland"
              : "12 April 2024 in Warsaw, Poland"}
          </p>
          <h1 className={boldTextClass}>
            {isSchedule ? "SCHEDULE" : "SPEAKERS"}
          </h1>
          <h2 className="text-xl font-bold text-white lg:text-3xl">
            {info.heroTitle}
          </h2>
          <p className="w-72 lg:w-[750px]">{info.heroDesc}</p>
        </div>
      )}

      {isTicket && (
        <div className={wrapperClass}>
          <p className={whiteTextClass}>12 April 2024 in Warsaw, Poland</p>
          <h1 className={boldTextClass}>GET YOUR TICKET</h1>
          <h2 className="text-xl font-bold text-white lg:text-3xl">
            PRICING PLANS
          </h2>
          <p className="w-72 lg:w-[750px]">{info.heroDesc}</p>
        </div>
      )}

      {isVenue && (
        <div className={wrapperClass}>
          <h2 className={whiteTextClass}>12 April 2024 in Warsaw, Poland</h2>
          <h1 className={boldTextClass}>CONFRONTJS 2024</h1>
          <h2 className="text-xl font-bold text-white lg:text-5xl">venue</h2>
        </div>
      )}

      {isAbout && (
        <div className={wrapperClass}>
          <p className={whiteTextClass}>12 April 2024 in Warsaw, Poland</p>
          <h1 className={boldTextClass}>WHY CONFRONTJS?</h1>
          <h2 className="w-72 lg:w-[750px] font-bold text-xl text-white lg:text-3xl">
            {info.whyDesc}
          </h2>
        </div>
      )}
    </div>
  );
}
