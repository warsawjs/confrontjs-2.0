import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "../../data/data.json";

export default function Sponsors() {
  return (
    <div className="flex flex-col items-center justify-center py-40 lg:px-40">
      <div className="flex flex-col">
        <div className="flex justify-center text-center">
          <h2 className="text-xl font-bold text-white uppercase lg:text-4xl">
            sponsors
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 pt-10">
          <div className="flex flex-col items-center justify-center pt-20 text-center">
            <h1 className="pb-20 text-lg font-bold text-black lg:text-3xl">
              Diamond sponsor
            </h1>
            <div className="flex items-center justify-center gap-20">
              {data.sponsors.map((sponsor, i) => {
                if (sponsor.type === "diamond") {
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out cursor-pointer w-72 h-30 rounded-xl opacity-80 hover:opacity-100"
                    >
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
            <h1 className="pb-20 text-lg font-bold text-black lg:text-3xl">
              Gold sponsor
            </h1>
            <div className="flex items-center justify-center gap-20">
              {data.sponsors.map((sponsor, i) => {
                if (sponsor.type === "gold") {
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out cursor-pointer w-72 h-30 rounded-xl opacity-80 hover:opacity-100"
                    >
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
            <h1 className="pb-20 text-lg font-bold text-black lg:text-3xl">
              Silver sponsors
            </h1>
            <div className="grid items-center justify-center grid-cols-1 gap-20 lg:grid-cols-2">
              {data.sponsors.map((sponsor, i) => {
                if (sponsor.type === "silver") {
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-center w-64 overflow-hidden transition-all duration-300 ease-in-out cursor-pointer h-25 rounded-xl opacity-80 hover:opacity-100"
                    >
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

        {/* <div className="grid items-center justify-center grid-cols-1 gap-20 pt-4 lg:grid-cols-3 lg:pt-5">
        {data.sponsors.map((sponsor) => {
          return (
            <div className="flex items-center justify-center h-40 overflow-hidden transition-all duration-300 ease-in-out cursor-pointer w-72 rounded-xl opacity-60 hover:opacity-100">
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
