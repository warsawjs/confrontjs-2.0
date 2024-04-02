import { Numbers } from "@/components/Numbers";
import BecomeSponsor from "@/components/sections/BecomeSponsor";
import Hero from "@/components/sections/Hero";
import { Organizers } from "@/components/sections/Organizers";
import Partners from "@/components/sections/Partners";
import { Schedule } from "@/components/sections/Schedule";
import Speakers from "@/components/sections/Speakers";
import Sponsors from "@/components/sections/Sponsors";
import { Staff } from "@/components/sections/Staff";
import Testimonials from "@/components/sections/Testimonials";
import { Venue } from "@/components/sections/Venue";
import { buildStaticProps, fetchData } from "@/hooks/useRemoteData";
import type { InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

export type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function MainPage({
  tracksData,
  speakers,
  testimonials,
  venue,
  info,
  staff,
}: HomePageProps) {
  return (
    <>
      <NextSeo title="Welcome to ConfrontJS" />
      <section>
        <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
          <Hero variant="main" info={info} />
          <Speakers variant="main" data={speakers} info={info} />
          <Numbers color="#17E9E0" info={info} />
        </div>

        <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
          <BecomeSponsor info={info} />
          <Schedule tracksData={tracksData} info={info} venue={venue} />
        </div>

        <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
          <Sponsors />
          <Partners data={info} />
        </div>

        <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
          <Organizers />
          <Staff staff={staff} />
          <Venue variant="main" info={info} venue={venue} />

          <Testimonials data={testimonials} info={info} />
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const schedule = await fetchData("schedule");
  const venue = await fetchData("venue");
  const info = await fetchData("info");
  return {
    props: {
      ...(await (await buildStaticProps()()).props),
      info,
      venue,
      tracksData: {
        trackOne: {
          title: info.line1Title,
          textContent: info.line1Desc,
          talkList: schedule.filter((event: any) => event.day != 2),
        },
        trackTwo: {
          title: info.line2Title,
          textContent: info.line2Desc,
          talkList: schedule.filter((event: any) => event.day == 2),
        },
      },
    },
  };
};
