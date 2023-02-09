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
    <div className="flex flex-col py-20 gap-5 items-center text-center">
      <div
        className={`${
          variant === "main" ? "flex" : "hidden"
        } flex-col gap-5 items-center text-center text-sm lg:text-base`}
      >
        <div className="w-44 h-32 lg:w-72 lg:h-64 mb-10">
          <Image
            className="w-full"
            src={logo}
            width={1000}
            height={1000}
            alt="logo"
          />
        </div>
        <h3 className="font-bold text-sm lg:text-xl">
          Join us for the Next Front - End Conference
        </h3>
        <h2 className="text-sm text-white lg:text-3xl">
          24th of March 2023 - Warsaw, poland
        </h2>
        <h1 className="w-72 lg:w-[740px] font-bold text-xl lg:text-4xl text-tertiary uppercase">
          EMPOWERING THE NEXT GENERATION OF FRONT-END PROFESSIONALS
        </h1>
        <div className="flex flex-col lg:flex-row gap-5 py-10">
          <Link
            href={info.sponsorLink}
            className="font-bold px-6 py-4 border-2 text-xs lg:text-xl text-black uppercase hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out rounded-2xl"
          >
            BECOME A SPONSOR
          </Link>
          <Link
            href="/buy-a-ticket"
            className="font-bold px-6 py-4 bg-tertiary text-xs lg:text-xl uppercase text-white hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out rounded-2xl"
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
          24 march 2023 in warsaw, poland
        </p>
        <h1 className="font-bold text-3xl lg:text-7xl text-tertiary uppercase">
          SCHEDULE
        </h1>
        <h2 className="font-bold text-xl text-white lg:text-3xl">
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
          24 march 2023 in warsaw, poland
        </p>
        <h1 className="font-bold text-3xl lg:text-7xl text-tertiary">
          SPEAKERS
        </h1>
        <h2 className="font-bold text-xl text-white lg:text-3xl">
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
          24 march 2023 in warsaw, poland
        </p>
        <h1 className="font-bold text-3xl lg:text-7xl text-tertiary">
          GET YOUR TICKET
        </h1>
        <h2 className="font-bold text-xl text-white lg:text-3xl">
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
          24 march 2023 in warsaw, poland
        </h2>
        <h1 className="font-bold text-3xl lg:text-7xl text-tertiary">
          CONFRONTJS 2023
        </h1>
        <h2 className="font-bold text-xl text-white lg:text-5xl">venue</h2>
      </div>

      <div
        className={`${
          variant === "about" ? "flex" : "hidden"
        } flex-col gap-5 items-center text-center text-sm lg:text-base`}
      >
        <p className="text-sm text-white lg:text-3xl">
          24 march 2023 in warsaw, poland
        </p>
        <h1 className="font-bold text-3xl lg:text-7xl text-tertiary">
          WHY CONFRONTJS?
        </h1>
        <h2 className="font-bold text-xl text-white lg:text-3xl">
          {info.whyDesc}
        </h2>
      </div>
    </div>
  );
}
