import Hero from "@/components/sections/Hero";
import Speakers from "@/components/sections/Speakers";
import Head from "next/head";
import data from ".././data/data.json";

const info = data.info;
const speakers = data.speakers;

export function SpeakersPage() {
  return (
    <section className="bg-gradient-to-b from-[#A64AC9] to-white">
      <Head>
        <title>Speakers</title>
      </Head>
      <Hero variant="speakers" info={info} />
      <Speakers variant="speakers" data={speakers} info={info} />
    </section>
  );
}

export default SpeakersPage;
