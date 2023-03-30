import Hero from "@/components/sections/Hero";
import { Schedule } from "@/components/sections/Schedule";
import { tracksData as indexStaticProps } from "./index";
import Head from "next/head";
import data from ".././data/data.json";

const info = data.info;
const venue = data.venue;

export default function SchedulePage() {
  return (
    <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
      <Head>
        <title>Schedule</title>
      </Head>
      <Hero variant="schedule" info={info} />
      <Schedule tracksData={tracksData} info={info} venue={venue} />
    </div>
  );
}

export const tracksData = indexStaticProps;
