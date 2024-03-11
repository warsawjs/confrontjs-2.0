import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "../../public/logo.png";

type Props = {
  variant: string;
  info: any;
};

export default function Hero({ variant, info }: Props) {
  return (
    <div className="flex flex-col items-center gap-5 py-20 text-center">
      <div
        className={`${
          variant === "main" ? "flex" : "hidden"
        } flex-col gap-5 items-center text-center text-sm lg:text-base`}
      >
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
        <h2 className="text-sm text-white lg:text-3xl">
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
            className="px-6 py-4 text-xs font-bold text-black uppercase transition-all duration-300 ease-in-out border-2 lg:text-xl hover:bg-secondary hover:text-black rounded-2xl"
          >
            BECOME A SPONSOR
          </Link>
          <Link
            href="/buy-a-ticket"
            className="px-6 py-4 text-xs font-bold text-white uppercase transition-all duration-300 ease-in-out bg-tertiary lg:text-xl hover:bg-secondary hover:text-black rounded-2xl"
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

      <div
        className={`${
          variant === "schedule" ? "flex" : "hidden"
        } flex-col gap-5 items-center text-center text-sm lg:text-base`}
      >
        <p className="text-sm text-white lg:text-3xl">
          12 April 2024 in Warsaw, Poland
        </p>
        <h1 className="text-3xl font-bold uppercase lg:text-7xl text-tertiary">
          SCHEDULE
        </h1>
        <h2 className="text-xl font-bold text-white lg:text-3xl">
          {info.heroTitle}
        </h2>
        <p className="w-72 lg:w-[750px]">{info.heroDesc}</p>
      </div>

      <div
        className={`${
          variant === "speakers" ? "flex" : "hidden"
        } flex-col gap-5 items-center text-center text-sm lg:text-base`}
      >
        <p className="text-sm text-white lg:text-3xl">
          12 April 2024 in Warsaw, Poland
        </p>
        <h1 className="text-3xl font-bold lg:text-7xl text-tertiary">
          SPEAKERS
        </h1>
        <h2 className="text-xl font-bold text-white lg:text-3xl">
          {info.heroTitle}
        </h2>
        <p className="w-72 lg:w-[750px]">{info.heroDesc}</p>
      </div>

      <div
        className={`${
          variant === "ticket" ? "flex" : "hidden"
        } flex-col gap-5 items-center text-center text-sm lg:text-base`}
      >
        <p className="text-sm text-white lg:text-3xl">
          12 April 2024 in Warsaw, Poland
        </p>
        <h1 className="text-3xl font-bold lg:text-7xl text-tertiary">
          GET YOUR TICKET
        </h1>
        <h2 className="text-xl font-bold text-white lg:text-3xl">
          PRICING PLANS
        </h2>
        <p className="w-72 lg:w-[750px]">{info.heroDesc}</p>
      </div>

      <div
        className={`${
          variant === "venue" ? "flex" : "hidden"
        } flex-col gap-5 items-center text-center text-sm lg:text-base`}
      >
        <h2 className="text-sm text-white lg:text-3xl">
          12 April 2024 in Warsaw, Poland
        </h2>
        <h1 className="text-3xl font-bold lg:text-7xl text-tertiary">
          CONFRONTJS 2024
        </h1>
        <h2 className="text-xl font-bold text-white lg:text-5xl">venue</h2>
      </div>

      <div
        className={`${
          variant === "about" ? "flex" : "hidden"
        } flex-col gap-5 items-center text-center text-sm lg:text-base`}
      >
        <p className="text-sm text-white lg:text-3xl">
          12 April 2024 in Warsaw, Poland
        </p>
        <h1 className="text-3xl font-bold lg:text-7xl text-tertiary">
          WHY CONFRONTJS?
        </h1>
        <h2 className="w-72 lg:w-[750px] font-bold text-xl text-white lg:text-3xl">
          {info.whyDesc}
        </h2>
      </div>
    </div>
  );
}
