import React from "react";
import Link from "next/link";

export default function Premium({ ticket }: any) {
  return (
    <div
      className="w-[240px] h-[440px] lg:w-[312px] lg:h-[530px] flex flex-col justify-around py-4 px-14 items-center 
       text-center bg-white drop-shadow-xl shadow-[#392740] rounded-3xl text-black font-medium"
    >
      <h3 className="font-bold text-xl lg:text-2xl text-primary uppercase">
        {ticket.type}
      </h3>
      <p>{ticket.title}</p>
      <hr
        style={{
          width: "80%",
          height: "2px",
          color: "#A64AC9",
          background: "#A64AC9",
        }}
      />
      <p>{ticket.description}</p>
      <hr
        style={{
          width: "80%",
          height: "2px",
          color: "#A64AC9",
          background: "#A64AC9",
        }}
      />
      <h3 className="font-bold text-xl lg:text-2xl text-primary uppercase">
        {ticket.price}
      </h3>
      <Link
        className="py-4 px-6 font-bold text-white uppercase bg-primary hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out rounded-xl"
        href={ticket.url}
      >
        BUY
      </Link>
    </div>
  );
}
