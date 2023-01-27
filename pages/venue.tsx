import { Venue } from "@/components/sections/Venue";
import Hero from "@/components/sections/Hero";
import Parking from "@/components/sections/Parking";
import Hotel from "@/components/sections/Hotel";
import TouristAttractions from "@/components/sections/TouristAttractions";

export function VenuePage() {
  return (
    <section className="">
      <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
        <Hero variant="venue"/>
        <Venue variant="venue"/>
        <Parking/>
      </div>
      
      <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
        <Hotel/>
        <TouristAttractions/>
      </div>
    </section>
  )
}

export default VenuePage;
