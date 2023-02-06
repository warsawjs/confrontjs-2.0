import Hero from "@/components/sections/Hero";
import  Speakers  from "@/components/sections/Speakers";
import { buildStaticProps, useData } from "@/hooks/useRemoteData";

export const getStaticProps = buildStaticProps(['speakers', 'info']);

export function SpeakersPage({ speakers, info }: any) {
  if (process.env.NEXT_PUBLIC_RELOAD) {
    ({speakers, info} = useData({speakers, info}));
  }
  return (
    <section className="bg-gradient-to-b from-[#A64AC9] to-white">
      <Hero variant="speakers" info={info}/>
      <Speakers variant="speakers" data={speakers} info={info} />
    </section>
  )
}

export default SpeakersPage;
