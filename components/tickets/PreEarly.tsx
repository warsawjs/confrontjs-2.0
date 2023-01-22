import React from "react";
import Link from "next/link";

export default function PreEarly() {
  return (
    <div
      className="w-[240px] h-[440px] lg:w-[312px] lg:h-[530px] flex flex-col justify-around py-4 px-14 items-center 
              text-center bg-white drop-shadow-xl shadow-[#392740] rounded-3xl text-black font-medium"
    >
      <h3 className="font-bold text-xl lg:text-2xl text-primary">PRE EARLY</h3>
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
      <h3 className="font-bold text-xl lg:text-2xl text-primary">300 PLN</h3>
      <Link
        className="py-4 px-6 font-bold text-white bg-primary rounded-xl"
        href=""
      >
        BUY
      </Link>
    </div>
  );
}
