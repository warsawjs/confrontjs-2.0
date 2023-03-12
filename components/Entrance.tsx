import React from "react";
import venueEntrance from "../public/entrance.png";
import Image from "next/image";

export default function Entrance() {
  return (
    <div className="w-[306px] lg:w-[1020px] flex flex-col items-center justify-center rounded-3xl overflow-hidden gap-10 py-20">
      <h1 className="font-bold text-xl lg:text-4xl uppercase py-5">entrance</h1>
      <div className="w-[306px] lg:w-[1020px] rounded-3xl overflow-hidden drop-shadow-xl">
        <Image src={venueEntrance} alt="map" />
      </div>
    </div>
  );
}
