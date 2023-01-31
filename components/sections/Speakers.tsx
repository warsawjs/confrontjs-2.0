import React from "react";
import data from "../../data/data.json";
import Image from "next/image";
import { IoIosArrowDropupCircle } from "react-icons/io";
import Link from "next/link";

type Props = {
  variant: String;
};

export default function Speakers({ variant }: Props) {
  return (
    <div className="flex flex-col gap-20 px-5 lg:px-40 py-40">
      <div
        className={`${
          variant === "main" ? "flex" : "hidden"
        } flex-col items-center text-center gap-5`}
      >
        <h2 className="font-bold text-xl text-white lg:text-4xl">SPEAKERS</h2>
        <p className="w-[306px] lg:w-[750px] text-xs text-white lg:text-base">
          Dor ohur. Speras mikrong jepogt. Tångar nasam an. Emstat jyde. Are
          benar. Udås tåbel stenoligt. Märk-dna bida, polyrad. Lyssna in
          utsmarta. Söjojysk. Mikrons ultrang: om än sad. Ressade bek antitism.
          Sofav telenilig. Matilda Gustavsson n
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3">
        {variant === "main"
          ? data.speakers.slice(0, 6).map((speaker) => {
              return (
                <div className="flex flex-col items-center pb-10 gap-5">
                  <div className="relative w-[145px] h-[145px] lg:w-[300px] lg:h-[300px] flex items-end justify-center rounded-3xl bg-white overflow-hidden drop-shadow-xl shadow-[#392740]">
                    <Image
                      width={300}
                      height={300}
                      alt="avatar"
                      src={speaker.avatar}
                    />
                    <div className="w-[64px] h-[64px] lg:w-[72px] lg:h-[72px] absolute pt-5 lg:pt-6 lg:hover:pt-0 transition-all duration-300 ease-in-out text-7xl lg:text-7xl">
                      <Link
                        className="text-white lg:hover:text-secondary"
                        href={`speakers/${speaker.slug}`}
                      >
                        <IoIosArrowDropupCircle />
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-bold text-sm lg:text-2xl">
                      {speaker.name}
                    </h3>
                    <p className="text-[10px] lg:text-xs">{speaker.company}</p>
                  </div>
                </div>
              );
            })
          : data.speakers.map((speaker) => {
              return (
                <div className="flex flex-col items-center pb-10 gap-5">
                  <div className="relative w-[145px] h-[145px] lg:w-[300px] lg:h-[300px] flex items-end justify-center rounded-3xl bg-white overflow-hidden drop-shadow-xl shadow-[#392740]">
                    <Image
                      width={300}
                      height={300}
                      alt="avatar"
                      src={speaker.avatar}
                    />
                    <div className="w-[64px] h-[64px] lg:w-[72px] lg:h-[72px] absolute pt-5 lg:pt-6 lg:hover:pt-0 transition-all duration-300 ease-in-out text-7xl lg:text-7xl">
                      <Link
                        className="text-white lg:hover:text-secondary"
                        href={`speakers/${speaker.slug}`}
                      >
                        <IoIosArrowDropupCircle />
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-bold text-sm lg:text-2xl">
                      {speaker.name}
                    </h3>
                    <p className="text-[10px] lg:text-xs">{speaker.company}</p>
                  </div>
                </div>
              );
            })}
      </div>

      <div
        className={`${
          variant === "main" ? "flex" : "hidden"
        } items-center justify-center`}
      >
        <Link
          href="/speakers"
          className="font-bold text-xs lg:text-xl px-6 py-4 bg-tertiary text-secondary hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out rounded-2xl"
        >
          SEE ALL SPEAKERS
        </Link>
      </div>

      <div
        className={`${
          variant === "speakers" ? "flex" : "hidden"
        } items-center justify-center`}
      >
        <Link
          href="/buy-a-ticket"
          className="font-bold text-sm lg:text-xl px-6 py-4 bg-tertiary text-secondary hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out rounded-2xl"
        >
          BUY A TICKET
        </Link>
      </div>
    </div>
  );
}
