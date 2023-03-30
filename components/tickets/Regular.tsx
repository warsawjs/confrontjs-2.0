import React from "react";
import Link from "next/link";

export default function Regular({ ticket }: any) {
  return (
    <div
      className="w-[240px] h-[440px] lg:w-[312px] lg:h-[530px] flex flex-col justify-center gap-5 py-4 px-5 items-center 
       text-center bg-primary text-white drop-shadow-xl shadow-[#392740] rounded-3xl font-medium"
    >
      <h3 className="font-bold text-2xl lg:text-3xl uppercase">
        {ticket.type}
      </h3>
      <div className="flex flex-col items-center text-center gap-2 text-base lg:text-xl">
        <p>{ticket.feature1}</p>
        <p>{ticket.feature2}</p>
        <p>{ticket.feature3}</p>
        <p>{ticket.feature4}</p>
        <p>{ticket.feature5}</p>
      </div>

      <hr
        style={{
          width: "80%",
          height: "2px",
          color: "#FFFFFF",
          background: "#FFFFFF",
        }}
      />

      <h3 className="font-bold text-xl lg:text-2xl uppercase py-5">
        {ticket.price}
      </h3>
      <Link
        onClick={(e) => e.preventDefault()}
        className="py-4 px-6 font-bold bg-white text-primary uppercase hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out rounded-xl"
        href={ticket.url}
      >
        BUY
      </Link>
    </div>
  );
}
