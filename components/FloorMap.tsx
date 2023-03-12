import React from "react";
import map from "../public/map.png";
import Image from "next/image";

export default function FloorMap() {
  return (
    <div className="w-[306px] lg:w-[1020px] flex flex-col items-center justify-center gap-10 py-20">
      <h1 className="font-bold text-xl lg:text-4xl uppercase py-5">map</h1>
      <div className="w-[306px] lg:w-[1020px] rounded-3xl overflow-hidden drop-shadow-xl">
        <Image src={map} alt="map" />
      </div>
    </div>
  );
}
