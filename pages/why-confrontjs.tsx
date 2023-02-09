import { Numbers } from "@/components/Numbers";
import Hero from "@/components/sections/Hero";
import Sponsors from "@/components/sections/Sponsors";
import Testimonials from "@/components/sections/Testimonials";
import { buildStaticProps, useData } from "@/hooks/useRemoteData";
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
    <section>
      <div className="bg-gradient-to-b from-[#A64AC9] to-white">
        <Hero variant="about" info={info} />
        <Numbers color={primary} info={info} />
        <Sponsors />
      </div>

      <Testimonials data={testimonials} info={info} />
    </section>
  );
}

export default WhyConfrontPage;
