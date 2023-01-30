import React from "react";
import Link from "next/link";
import FloorMap from "../FloorMap";

export default function Parking() {
  return (
    <div className="flex flex-col items-center justify-center text-sm lg:text-base">
      <FloorMap />
      <div className="flex flex-col items-center text-center gap-10 py-10 lg:py-20">
        <div className="flex flex-col items-center text-center gap-5">
          <h1 className="font-bold text-2xl lg:text-4xl">PARKING</h1>
          <p className="w-[200px] lg:w-[370px] font-semibold text-primary">
            There will be 746 parking spaces available for use near the
            conference venue.
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-5">
          <h2 className="font-bold text-xl lg:text-2xl">ENTRY GATES:</h2>
          <p className="w-[307px] lg:w-[640px]">
            Three accessibles from Emilii Plater Street (one near Jerozolimskie
            Street/Museum of Technology; the second near the Congress Hall; and
            the third near Świętokrzyska Street on the PKiN side dedicated to
            children) and one from Marszłkowska Street. Gates can be opened by
            picking up the parking ticket or inserting a proximity subscriber
            card
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-5">
          <h2 className="font-bold text-xl lg:text-2xl">EXITS:</h2>
          <p className="w-[307px] lg:w-[640px]">
            One leaving toward Marszałkowska Street (next to the historic
            pedestal for open-air speeches) and five towards Emilii Plater
            Street (two next to the Museum of Technology near Jerozolimskie
            Street; one next to the Congress Hall, and two near the swimming
            pool by Świętokrzyska Street).
          </p>
        </div>
        <Link
          href="/buy-a-ticket"
          className="font-bold px-6 py-4 bg-primary text-white hover:bg-secondary
           hover:text-black transition-all duration-300 ease-in-out text-sm lg:text-2xl rounded-2xl"
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
}
