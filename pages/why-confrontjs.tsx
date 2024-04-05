import { Numbers } from "@/components/Numbers";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import PreviousConferences from "@/components/sections/PreviousConferences";
import Sponsors from "@/components/sections/Sponsors";
import Testimonials from "@/components/sections/Testimonials";
import { buildStaticProps, useData } from "@/hooks/useRemoteData";
import { NextSeo } from "next-seo";

const primary = "#A64AC9";

export const getStaticProps = buildStaticProps(["testimonials", "previous"]);

export function WhyConfrontPage({ info, testimonials, previous }: any) {
  if (process.env.NEXT_PUBLIC_RELOAD) {
    ({ info, testimonials, previous } = useData({
      info,
      testimonials,
      previous,
    }));
  }
  return (
    <>
      <NextSeo title="Why ConfrontJS?" />
      <section>
        <div className="bg-gradient-to-b from-[#A64AC9] to-white">
          <Hero variant="about" info={info} />
          <Numbers color={primary} info={info} />
          <Sponsors />
          <Partners data={info} />
        </div>

        <Testimonials data={testimonials} info={info} />
        <PreviousConferences info={info} data={previous} />
      </section>
    </>
  );
}

export default WhyConfrontPage;
