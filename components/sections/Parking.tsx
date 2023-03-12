import React from "react";
import Link from "next/link";
import FloorMap from "../FloorMap";
import Entrance from "../Entrance";

export default function Parking({ venue }: any) {
  return (
    <div className="flex flex-col items-center justify-center text-sm lg:text-base py-20">
      <FloorMap />
      <div className="flex flex-col items-center text-center gap-10 py-10 lg:py-20">
        <Entrance />
      </div>
      <div className="flex flex-col items-center text-center gap-10 py-10 lg:py-20">
        <Link
          href="/buy-a-ticket"
          className="font-bold px-6 py-4 bg-primary text-white uppercase hover:bg-secondary
           hover:text-black transition-all duration-300 ease-in-out text-sm lg:text-2xl rounded-2xl"
        >
          Buy a ticket
        </Link>
      </div>
    </div>
  );
}
