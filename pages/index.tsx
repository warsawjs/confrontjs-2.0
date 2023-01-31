import { Schedule } from "@/components/sections/Schedule";
import { Venue } from "@/components/sections/Venue";
import { Numbers } from "@/components/Numbers";
import { Organizers } from "@/components/sections/Organizers";
import Hero from "@/components/sections/Hero";
import Pictures from "@/components/sections/Pictures";
import Testimonials from "@/components/sections/Testimonials";
import Speakers from "@/components/sections/Speakers";
import BecomeSponsor from "@/components/sections/BecomeSponsor";
import { timelineData } from "@/mockData/timelineData";
import type { InferGetStaticPropsType } from "next";

export type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function MainPage({ tracksData }: HomePageProps) {
  return (
    <section>
      <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
        <Hero variant="main" />
        <Numbers color="#17E9E0" />
      </div>

      <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
        <Speakers variant="main" />
        <BecomeSponsor />
        <Schedule tracksData={tracksData} />
      </div>

      <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
        <Organizers />
        <Venue variant="main" />
        <Pictures />
        <Testimonials />
      </div>
    </section>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      tracksData: {
        trackOne: {
          title: "Line1",
          textContent:
            "Dor ohur. Speras mikrong jepogt. Tångar nasam an. Emstat jyde. Are benar. Udås tåbel stenoligt. Märk-dna bida, polyrad. Lyssna in utsmarta. Söjojysk. Mikrons ultrang: om än sad. Ressade bek antitism. Sofav telenilig.",
          talkList: timelineData,
        },
        trackTwo: {
          title: "Line2",
          textContent:
            "Dor ohur. Speras mikrong jepogt. Tångar nasam an. Emstat jyde. Are benar. Udås tåbel stenoligt. Märk-dna bida, polyrad. Lyssna in utsmarta. Söjojysk. Mikrons ultrang: om än sad. Ressade bek antitism. Sofav telenilig.",
          talkList: timelineData,
        },
      },
    },
  };
};
