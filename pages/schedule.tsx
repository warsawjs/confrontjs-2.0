import Hero from "@/components/sections/Hero";
import { Schedule } from "@/components/sections/Schedule";
import { useData } from "@/hooks/useRemoteData";
import { getStaticProps as indexStaticProps } from "./index";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";

export type ScheduleProps = InferGetStaticPropsType<
  typeof getStaticProps | any
>;

export default function SchedulePage({
  tracksData,
  info,
  venue,
}: ScheduleProps) {
  if (process.env.NEXT_PUBLIC_RELOAD) {
    ({ info, venue } = useData({ info, venue }));
  }
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

export const getStaticProps = indexStaticProps;
