import React from "react";
import Link from "next/link";

export default function Regular() {
  return (
    <div
      className="w-[240px] h-[440px] lg:w-[312px] lg:h-[580px] flex flex-col justify-around py-4 px-14 items-center 
              text-center bg-gradient-to-b from-[#A64AC9] via-[#A64AC9] drop-shadow-xl shadow-[#392740] to-white rounded-3xl font-medium"
    >
      <h3 className="font-bold text-xl lg:text-2xl text-white">REGULAR</h3>
      <p>by Chris Lilley </p>
      <hr
        style={{
          width: "80%",
          height: "2px",
          color: "#FFFFFF",
          background: "#FFFFFF",
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
          color: "#FFFFFF",
          background: "#FFFFFF",
        }}
      />
      <h3 className="font-bold text-xl lg:text-2xl">600 PLN</h3>
      <Link
        className="py-4 px-6 font-bold bg-white text-primary rounded-xl"
        href=""
      >
        BUY
      </Link>
    </div>
  );
}
