import Hero from "@/components/sections/Hero";
import { Schedule } from "@/components/sections/Schedule";
import { timelineData } from "@/mockData/timelineData";
import type { InferGetStaticPropsType } from "next";

export type ScheduleProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function SchedulePage({ tracksData }: ScheduleProps) {
  return (
    <>
      <Hero variant="schedule" />
      <Schedule tracksData={tracksData} />
    </>
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
