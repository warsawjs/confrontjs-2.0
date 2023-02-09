import React from "react";
import { Regular, Premium, PreEarly } from "../tickets";

export default function buyTicket({ data = [] }: { data: object[] }) {
  return (
    <div className="w-[100vw] flex flex-col justify-around items-center pb-40 text-center text-black text-xs lg:text-sm">
      <div>
        <div className="w-[100vw] flex flex-col lg:flex-row mt-10 justify-center items-center gap-10">
          {data.map((ticket, i) => {
            const Ticket = [Premium, Regular][i % 2];
            return <Ticket ticket={ticket} />;
          })}
        </div>
        <p className="pt-10 font-bold text-black uppercase">
          ALL TAXES INCLUDE 23% VAT
        </p>
      </div>
    </div>
  );
}
