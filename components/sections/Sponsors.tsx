import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "../../data/data.json";

export default function Sponsors() {
  return (
    <div className="flex items-center justify-center py-40 lg:px-40 lg:px-38">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
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
