import { Schedule } from "@/components/sections/Schedule";
import { Venue } from "@/components/sections/Venue";
import { Numbers } from "@/components/Numbers";
import { Organizers } from "@/components/sections/Organizers";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import Speakers from "@/components/sections/Speakers";
import BecomeSponsor from "@/components/sections/BecomeSponsor";
import { buildStaticProps, fetchData } from "@/hooks/useRemoteData";
import type { InferGetStaticPropsType } from "next";
import Sponsors from "@/components/sections/Sponsors";

export type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function MainPage({
  tracksData,
  speakers,
  testimonials,
  venue,
  info,
}: HomePageProps) {
  return (
    <section>
      <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
        <Hero variant="main" info={info} />
        <Numbers color="#17E9E0" info={info} />
        <Sponsors />
      </div>

      <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
        <Speakers variant="main" data={speakers} info={info} />
        <BecomeSponsor info={info} />
        <Schedule tracksData={tracksData} info={info} venue={venue} />
      </div>

      <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
        <Organizers />
        <Venue variant="main" info={info} venue={venue} />

        <Testimonials data={testimonials} info={info} />
      </div>
    </section>
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
