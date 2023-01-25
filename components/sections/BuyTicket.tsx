import Link from "next/link";
import React from "react";
import { Regular, Premium, PreEarly } from '../tickets';

export default function buyTicket() {
  return (
    <div className="w-[100vw] flex flex-col justify-around items-center pb-40 text-center bg-gradient-to-b from-[#A64AC9] to-white text-white text-xs lg:text-sm">
      

      <div>
        <div className="w-[100vw] flex flex-col lg:flex-row mt-40 justify-center items-center gap-10">

          <Premium/>
          <Regular/>
          <PreEarly/>
          
        </div>
        <p className="pt-5 text-black">ALL TAXES INCLUDE 23% VAT</p>
      </div>
    </div>
  );
}
