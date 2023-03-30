import React from "react";
import Link from "next/link";

export default function Premium({ ticket }: any) {
  return (
    <div
      className="w-[240px] h-[440px] lg:w-[312px] lg:h-[530px] flex flex-col justify-center gap-5 py-4 px-5 items-center 
       text-center bg-white drop-shadow-xl shadow-[#392740] rounded-3xl text-black font-medium opacity-80"
    >
      <h3 className="font-bold text-2xl text-primary lg:text-3xl uppercase opacity-80">
        {ticket.type}
      </h3>
      <div className="flex flex-col items-center text-center gap-2 text-base lg:text-xl text-primary opacity-80">
        <p>{ticket.feature1}</p>
        <p>{ticket.feature2}</p>
        <p>{ticket.feature3}</p>
        <p>{ticket.feature4}</p>
      </div>
      <hr
        style={{
          width: "80%",
          height: "2px",
          color: "#A64AC9",
          background: "#A64AC9",
          opacity: "80%",
        }}
      />
      <h3 className="font-bold text-xl lg:text-2xl text-primary uppercase py-5 opacity-80">
        {ticket.price}
      </h3>
      <Link
        onClick={(e) => e.preventDefault()}
        className="py-4 px-6 font-bold text-white uppercase bg-primary transition-all duration-300 ease-in-out rounded-xl opacity-80"
        href={ticket.url}
      >
        BUY
      </Link>
      <p className="font-bold text-base lg:text-xl text-[#D0342C] opacity-100">
        Ticket sales closed!
      </p>
    </div>
  );
}
