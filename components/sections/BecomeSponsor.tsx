import React from "react";
import Link from "next/link";

export default function BecomeSponsor({ info }: any) {
  return (
    <div className="flex flex-col items-center text-center gap-5 py-20 lg:py-40">
      <h2 className="font-bold text-xl text-black lg:text-4xl uppercase">
        BECOME A SPONSOR
      </h2>
      <p className="w-[306px] lg:w-[750px] text-xs text-black lg:text-base">
        {info.becomeSponsorDesc}
      </p>
      <div className="flex flex-col lg:flex-row gap-5 py-10">
        <Link
          href={info.sponsorLink}
          className="font-bold px-6 py-4 border-2 text-black uppercase hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out rounded-2xl"
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
    </div>
  );
}
