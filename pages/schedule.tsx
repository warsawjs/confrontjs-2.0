import Hero from "@/components/sections/Hero";
import { Schedule } from "@/components/sections/Schedule";
import { useData } from "@/hooks/useRemoteData";
import { getStaticProps as indexStaticProps } from './index';
import type { InferGetStaticPropsType } from "next";

export type ScheduleProps = InferGetStaticPropsType<typeof getStaticProps | any>;

export default function SchedulePage({ tracksData, info, venue }: ScheduleProps) {
  if (process.env.NEXT_PUBLIC_RELOAD) {
    ({info, venue} = useData({info, venue}));
  }
  return (
    <>
      <Hero variant="schedule" info={info} />
      <Schedule tracksData={tracksData} info={info} venue={venue} />
    </>
  );
}

export const getStaticProps = indexStaticProps;
