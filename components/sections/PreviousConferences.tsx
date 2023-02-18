import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PreviousConferences({ data = [], info }: any) {
  return (
    <div className="flex flex-col justify-center py-40 px-20 lg:px-40 gap-20">
      <div className="flex flex-col text-center items-center gap-5">
        <h1 className="font-bold text-xl lg:text-4xl uppercase">
          The previous conferences
        </h1>
        <p className="w-[306px] lg:w-[750px] text-xs lg:text-base">
          {info.previousConferences}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {data.map((conference: any) => {
          return (
            <div className="flex flex-col items-center text-center gap-10 pb-20">
              <h2 className="font-bold text-xl lg:text-2xl">
                {conference.title}
              </h2>
              <div className="flex flex-grow items-center w-[250px] h-[200px] lg:w-[350px] lg:h-[280px] rounded-3xl overflow-hidden drop-shadow-xl shadow-[#392740]">
                <Image
                  className="h-full"
                  width={1000}
                  height={1000}
                  src={conference.picture}
                  alt={conference.title}
                />
              </div>
              <p className="w-[200px] lg:w-[350px] text-xs">
                {conference.description}
              </p>
              <Link
                className="font-bold uppercase px-6 py-4 bg-primary rounded-xl text-sm text-white hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out"
                href={conference.url}
              >
                SEE MORE
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
