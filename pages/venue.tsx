import { Venue } from "@/components/sections/Venue";
import Hero from "@/components/sections/Hero";
import Parking from "@/components/sections/Parking";
import Hotel from "@/components/sections/Hotel";
import TouristAttractions from "@/components/sections/TouristAttractions";
import Head from "next/head";
import data from ".././data/data.json";

const info = data.info;
const attractions = data.attractions;
const venue = data.venue;
const hotels = data.hotels;

export function VenuePage() {
  return (
    <section>
      <Head>
        <title>Venue</title>
      </Head>
      <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
        <Hero variant="venue" info={info} />
        <Venue variant="venue" info={info} venue={venue} />
        <Parking venue={venue} />
      </div>

      <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
        <Hotel data={hotels} />
        <TouristAttractions attractions={attractions} />
      </div>
    </section>
  );
}

export default VenuePage;
