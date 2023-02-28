import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "../../data/data.json";

export default function Sponsors() {
  return (
    <div className="flex flex-col items-center justify-center py-40 lg:px-40">
      <div className="flex flex-col">
        <div className="flex justify-center text-center">
          <h2 className="font-bold text-xl text-white lg:text-4xl uppercase">
            sponsors
          </h2>
        </div>
        <div className="flex flex-col items-center gap-10 justify-center pt-10">
          <div className="flex flex-col items-center justify-center pt-20 text-center">
            <h1 className="font-bold text-lg text-black lg:text-3xl pb-20">
              Diamond sponsor
            </h1>
            <div className="flex items-center justify-center gap-20">
              {data.sponsors.map((sponsor) => {
                if (sponsor.type === "diamond") {
                  return (
                    <div className="w-72 h-30 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out">
                      <Link href={sponsor.url}>
                        <Image
                          width={1200}
                          height={600}
                          src={`https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/sponsors/logo-${sponsor.name}.png`}
                          alt={sponsor.name}
                        />
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-20 text-center">
            <h1 className="font-bold text-lg text-black lg:text-3xl pb-20">
              Gold sponsor
            </h1>
            <div className="flex items-center justify-center gap-20">
              {data.sponsors.map((sponsor) => {
                if (sponsor.type === "gold") {
                  return (
                    <div className="w-72 h-30 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out">
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
                }
              })}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-20 text-center">
            <h1 className="font-bold text-lg text-black lg:text-3xl pb-20">
              Silver sponsors
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-20">
              {data.sponsors.map((sponsor) => {
                if (sponsor.type === "silver") {
                  return (
                    <div className="w-64 h-25 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out">
                      <Link href={sponsor.url}>
                        <Image
                          width={800}
                          height={400}
                          src={`https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/sponsors/logo-${sponsor.name}.png`}
                          alt={sponsor.name}
                        />
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-20 pt-4 lg:pt-5">
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
      </div> */}
      </div>
    </div>
  );
}
