import { Numbers } from "@/components/Numbers";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import PreviousConferences from "@/components/sections/PreviousConferences";
import Sponsors from "@/components/sections/Sponsors";
import Testimonials from "@/components/sections/Testimonials";
import Head from "next/head";
import data from ".././data/data.json";

const info = data.info;
const testimonials = data.testimonials;
const previous = data.previous;
const primary = "#A64AC9";

export function WhyConfrontPage() {
  return (
    <section>
      <Head>
        <title>Why ConfrontJS?</title>
      </Head>
      <div className="bg-gradient-to-b from-[#A64AC9] to-white">
        <Hero variant="about" info={info} />
        <Numbers color={primary} info={info} />
        <Sponsors />
        <Partners info={info} />
      </div>

      <Testimonials data={testimonials} info={info} />
      <PreviousConferences info={info} data={previous} />
    </section>
  );
}

export default WhyConfrontPage;
