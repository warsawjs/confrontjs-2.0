import { Schedule } from "@/components/sections/Schedule";
import { Venue } from "@/components/sections/Venue";
import { Numbers } from "@/components/Numbers";
import { Organizers } from "@/components/sections/Organizers";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import Speakers from "@/components/sections/Speakers";
import BecomeSponsor from "@/components/sections/BecomeSponsor";
import Sponsors from "@/components/sections/Sponsors";
import { Staff } from "@/components/sections/Staff";
import Head from "next/head";
import Partners from "@/components/sections/Partners";
import data from ".././data/data.json";
import {
  Info,
  VenueData,
  Testimonial,
  Speaker,
  StaffMember,
  ScheduleEvent,
  TracksData,
} from "@/types";

const info: Info = data.info;
const venue: VenueData = data.venue;
const staff: StaffMember[] = data.staff;
const testimonials: Testimonial[] = data.testimonials;
const speakers: Speaker[] = data.speakers;
const schedule: ScheduleEvent[] = data.schedule;

export default function MainPage() {
  return (
    <section>
      <Head>
        <title>Welcome to ConfrontJS</title>
      </Head>
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
        <Partners info={info} />
      </div>

      <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
        <Organizers />
        <Staff staff={staff} />
        <Venue variant="main" info={info} venue={venue} />

        <Testimonials data={testimonials} info={info} />
      </div>
    </section>
  );
}

export const tracksData: TracksData = {
  trackOne: {
    title: info.line1Title,
    textContent: info.line1Desc,
    talkList: schedule.filter((event) => event.day !== 2),
  },
  trackTwo: {
    title: info.line2Title,
    textContent: info.line2Desc,
    talkList: schedule.filter((event) => event.day === 2),
  },
};
