import React from "react";
import Link from "next/link";
import FloorMap from "../FloorMap";

export default function Parking({venue}: any) {
  return (
    <div className="flex flex-col items-center justify-center text-sm lg:text-base">
      <FloorMap />
      <div className="flex flex-col items-center text-center gap-10 py-10 lg:py-20">
        <div className="flex flex-col items-center text-center gap-5">
          <h1 className="font-bold text-2xl lg:text-4xl">PARKING</h1>
          <p className="w-[200px] lg:w-[370px] font-semibold text-primary">
            {venue.parking}
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-5">
          <h2 className="font-bold text-xl lg:text-2xl">ENTRY GATES:</h2>
          <p className="w-[307px] lg:w-[640px]">
            {venue.entry}
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-5">
          <h2 className="font-bold text-xl lg:text-2xl">EXITS:</h2>
          <p className="w-[307px] lg:w-[640px]">
            {venue.exit}
          </p>
        </div>
        <Link
          href="/buy-a-ticket"
          className="font-bold px-6 py-4 bg-primary text-white hover:bg-secondary
           hover:text-black transition-all duration-300 ease-in-out text-sm lg:text-2xl rounded-2xl"
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
}
