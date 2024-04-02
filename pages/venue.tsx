import Hero from "@/components/sections/Hero";
import Hotel from "@/components/sections/Hotel";
import Parking from "@/components/sections/Parking";
import TouristAttractions from "@/components/sections/TouristAttractions";
import { Venue } from "@/components/sections/Venue";
import { buildStaticProps, useData } from "@/hooks/useRemoteData";
import { NextSeo } from "next-seo";

export const getStaticProps = buildStaticProps([
  "attractions",
  "venue",
  "hotels",
  "info",
]);

export function VenuePage({ info, venue, attractions, hotels }: any) {
  if (process.env.NEXT_PUBLIC_RELOAD) {
    ({ info, venue, attractions, hotels } = useData({
      info,
      venue,
      attractions,
      hotels,
    }));
  }
  return (
    <>
      <NextSeo title="Venue" />
      <section>
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
    </>
  );
}

export default VenuePage;
