import { Venue } from "@/components/sections/Venue";
import Hero from "@/components/sections/Hero";
import Parking from "@/components/sections/Parking";
import Hotel from "@/components/sections/Hotel";
import TouristAttractions from "@/components/sections/TouristAttractions";

export function VenuePage() {
  return (
    <section className="px-5 lg:px-56">
      <Hero variant="venue"/>
      <Venue variant="venue"/>
      <Parking/>
      <Hotel/>
      <TouristAttractions/>
    </section>
  )
}

export default VenuePage;
