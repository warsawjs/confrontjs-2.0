import { Venue } from "@/components/sections/Venue";
import Hero from "@/components/sections/Hero";
import Parking from "@/components/sections/Parking";
import Hotel from "@/components/sections/Hotel";
import TouristAttractions from "@/components/sections/TouristAttractions";
import { buildStaticProps, useData } from "@/hooks/useRemoteData";

export const getStaticProps = buildStaticProps(['attractions', 'venue', 'hotels', 'info']);

export function VenuePage( {info, venue, attractions, hotels}: any ) {
  if (process.env.NEXT_PUBLIC_RELOAD) {
    ({info, venue, attractions, hotels} = useData({info, venue, attractions, hotels}));
  }
  return (
    <section>
      <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
        <Hero variant="venue" info={info}/>
        <Venue variant="venue" info={info} venue={venue}/>
        <Parking venue={venue}/>
      </div>

      <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
        <Hotel data={hotels}/>
        <TouristAttractions attractions={attractions}/>
      </div>
    </section>
  )
}

export default VenuePage;
