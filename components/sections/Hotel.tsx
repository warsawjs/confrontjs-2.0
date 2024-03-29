import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hotel({ data = [] }: any) {
  return (
    <div className="flex flex-col gap-20 px-6 py-20 lg:px-44">
      <div className="flex flex-col items-center gap-10 text-center">
        <h1 className="text-2xl font-bold text-white uppercase lg:text-4xl">
          WHERE TO STAY?
        </h1>
        <p className="w-[306px] lg:w-[750px] text-xs text-white lg:text-base">
          Here you can find a curated list of hotels near the conference venue.
          These hotels are conveniently located and offer comfortable
          accommodations for attendees. Browse through the options and book your
          stay today.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {data.map((hotel: any) => {
          return (
            <div className="flex flex-col items-center gap-5 pb-10 text-center">
              <div className="flex flex-row gap-2 lg:gap-5">
                <p className="text-xs  lg:text-base">{hotel.distance}</p>
                <p className="text-xs  lg:text-base">{hotel["trip.time"]}</p>
                <p className="text-xs  lg:text-base">{hotel["trip.type"]}</p>
              </div>
              <div className="w-[145px] h-[145px] lg:w-[300px] lg:h-[300px] rounded-3xl overflow-hidden drop-shadow-xl">
                <Image
                  className="w-full h-full"
                  width={1000}
                  height={1000}
                  src={hotel.image_url}
                  alt={hotel.name}
                />
              </div>
              <div className="w-[145px] h-[120px] lg:w-[300px] lg:h-[200px] flex flex-col items-center justify-around">
                <h2 className="text-xs font-bold lg:text-2xl">{hotel.name}</h2>
                <p className="text-xs  lg:text-base">{hotel.address}</p>
                <div className="flex items-center justify-center w-20 h-10 font-bold transition-all duration-300 ease-in-out bg-tertiary text-secondary hover:bg-secondary hover:text-black rounded-xl">
                  <Link href={hotel.profile_url} target="_blank" rel="noopener">
                    Book
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
