import Hero from "@/components/sections/Hero";
import { Schedule } from "@/components/sections/Schedule";
import { useData } from "@/hooks/useRemoteData";
import type { InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import { getStaticProps as indexStaticProps } from "./index";

export type ScheduleProps = InferGetStaticPropsType<
  typeof getStaticProps | any
>;

export default function SchedulePage({
  tracksData,
  schedule,
  info,
  venue,
}: ScheduleProps) {
  if (process.env.NEXT_PUBLIC_RELOAD) {
    ({ info, venue, schedule } = useData({ info, venue, schedule }));
    tracksData = {
      trackOne: {
        title: info.line1Title,
        textContent: info.line1Desc,
        talkList: schedule?.filter?.((event: any) => event?.day != 2),
      },
      trackTwo: {
        title: info.line2Title,
        textContent: info.line2Desc,
        talkList: schedule?.filter?.((event: any) => event?.day == 2),
      },
    };
  }
  return (
    <>
      <NextSeo title="Schedule" />
      <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
        <Hero variant="schedule" info={info} />
        <Schedule tracksData={tracksData} info={info} venue={venue} />
      </div>
    </>
  );
}

export const getStaticProps = indexStaticProps;
