import React from "react";
import Link from "next/link";

export default function TouristAttractions({ attractions }) {
  return (
    <div className="flex flex-col items-center gap-10 py-20 lg:py-40">
      <h1 className="font-bold text-2xl text-primary lg:text-4xl pb-20">
        TOURIST ATTRACTIONS
      </h1>
      {attractions.map((attraction, index) => {
        return (
          <div
            className={`flex flex-col-reverse ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center justify-center gap-10 lg:gap-10`}
          >
            <div
              className={`flex flex-col items-center ${
                index % 2 !== 0
                  ? "lg:items-start lg:text-left"
                  : "lg:items-end lg:text-right"
              } text-center justify-between gap-10 py-4`}
            >
              <h2 className="font-bold text-xl lg:text-4xl">
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
            <div className="lg:w-[520px] lg:h-[480px] w-[310px] h-[185px] rounded-3xl bg-tertiary">
              <img
                className="w-full"
                src={attraction.image_url}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
