import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function TouristAttractions({
  attractions,
}: {
  attractions: any[];
}) {
  return (
    <div className="flex flex-col items-center gap-10 py-20 lg:py-40">
      <h1 className="font-bold text-2xl text-primary lg:text-4xl pb-20 uppercase">
        TOURIST ATTRACTIONS
      </h1>
      {attractions.map((attraction, index) => {
        return (
          <div
            className={`flex flex-col-reverse ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center justify-center gap-5 lg:gap-10 py-10`}
          >
            <div
              className={`flex flex-col items-center ${
                index % 2 !== 0
                  ? "lg:items-start lg:text-left"
                  : "lg:items-end lg:text-right"
              } text-center justify-between gap-5 lg:gap-10 py-10`}
            >
              <h2 className="w-[240px] lg:w-[450px] font-bold text-xl lg:text-4xl">
                {attraction.title}
              </h2>
              <p className="w-[240px] lg:w-[515px]">{attraction.paragraph}</p>
              <Link
                href={attraction.url}
                className="font-bold px-6 py-4 bg-primary text-white hover:bg-secondary
                 hover:text-black transition-all duration-300 ease-in-out text-sm lg:text-2xl rounded-2xl"
              >
                BUY A TICKET
              </Link>
            </div>
            <div className="flex items-center lg:w-[600px] lg:h-[400px] w-[310px] h-[185px] rounded-3xl overflow-hidden drop-shadow-xl">
              <Image
                className="h-full"
                width={1000}
                height={1000}
                src={attraction.image_url}
                alt={attraction.title}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
