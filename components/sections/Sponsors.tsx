import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "../../data/data.json";

export default function Sponsors() {
  return (
    <div className="flex flex-col items-center justify-center py-40 lg:px-40">
      <div className="flex flex-row justify-center text-center">
        <h1 className="font-bold text-xl text-black lg:text-4xl pb-10">
          Sponsors
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-20 pt-4 lg:pt-5">
        {data.sponsors.map((sponsor) => {
          return (
            <div className="w-72 h-40 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out">
              <Link href={sponsor.url}>
                <Image
                  width={1000}
                  height={500}
                  src={`https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/sponsors/logo-${sponsor.name}.png`}
                  alt={sponsor.name}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
