import React from "react";
import Link from "next/link";

export default function Regular() {
  return (
    <div
      className="w-[240px] h-[440px] lg:w-[312px] lg:h-[580px] flex flex-col justify-around py-4 px-14 items-center 
              text-center bg-gradient-to-b from-[#ebc0fd] via-white drop-shadow-xl shadow-[#392740] to-[#ebc0fd] rounded-3xl font-medium"
    >
      <h3 className="font-bold text-xl lg:text-2xl text-primary">REGULAR</h3>
      <p>by Chris Lilley </p>
      <hr
        style={{
          width: "80%",
          height: "2px",
          color: "#A64AC9",
          background: "#A64AC9",
        }}
      />
      <p>
        d web page editors now use Lorem Ipsum as their default model text, and
        a search for 'lorem ipsum' will uncover many web sites still in
      </p>
      <hr
        style={{
          width: "80%",
          height: "2px",
          color: "#A64AC9",
          background: "#A64AC9",
        }}
      />
      <h3 className="font-bold text-xl lg:text-2xl text-primary">600 PLN</h3>
      <Link
        className="py-4 px-6 font-bold bg-primary text-white hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out rounded-xl"
        href=""
      >
        BUY
      </Link>
    </div>
  );
}
