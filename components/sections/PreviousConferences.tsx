import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PreviousConferences({ data = [], info }: any) {
  return (
    <div className="flex flex-col justify-center gap-20 px-20 py-40 lg:px-40">
      <div className="flex flex-col items-center gap-5 text-center">
        <h1 className="text-xl font-bold uppercase lg:text-4xl">
          The previous conferences
        </h1>
        <p className="w-[306px] lg:w-[750px] text-xs lg:text-base">
          {info.previousConferences}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {data.map((conference: any, i: number) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-10 pb-20 text-center"
            >
              <h2 className="text-xl font-bold lg:text-2xl">
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
                className="px-6 py-4 text-sm font-bold text-white uppercase transition-all duration-300 ease-in-out bg-primary rounded-xl hover:bg-secondary hover:text-black"
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
