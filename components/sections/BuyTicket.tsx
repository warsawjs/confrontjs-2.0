import Link from "next/link";
import React from "react";
import { Regular, Premium, PreEarly } from '../tickets';

export default function buyTicket() {
  return (
    <div className="w-[100vw] flex flex-col justify-around items-center py-40 text-center bg-gradient-to-b from-[#A64AC9] to-white text-white text-xs lg:text-sm">
      <div className="w-[310px] lg:w-[750px] flex flex-col justify-between gap-5 items-center text-center">
        <p>24 march 2023 in warsaw, poland</p>
        <h1 className="text-3xl lg:text-7xl text-BLUE">GET YOUR TICKET</h1>
        <h2 className="text-xl lg:text-3xl">PRICING PLANS</h2>
        <p className="">
          Dor ohur. Speras mikrong jepogt. Tångar nasam an. Emstat jyde. Are
          benar. Udås tåbel stenoligt. Märk-dna bida, polyrad. Lyssna in
          utsmarta. Söjojysk. Mikrons ultrang: om än sad. Ressade bek antitism.
          Sofav telenilig. Matilda Gustavsson n
        </p>
      </div>

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
