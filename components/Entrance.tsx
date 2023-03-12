import React from "react";
import venueEntrance from "../public/entrance.png";
import Image from "next/image";

export default function Entrance() {
  return (
    <div className="w-[306px] lg:w-[1020px] flex flex-col items-center justify-center gap-10">
      <h1 className="font-bold text-xl lg:text-4xl uppercase">entrance</h1>
      <Image src={venueEntrance} alt="map" />
    </div>
  );
}
