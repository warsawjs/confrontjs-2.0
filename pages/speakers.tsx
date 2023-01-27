import Hero from "@/components/sections/Hero";
import  Speakers  from "@/components/sections/Speakers";

export function SpeakersPage() {
  return (
    <section className="px-5 lg:px-56 bg-gradient-to-b from-[#A64AC9] to-white">
      <Hero variant="speakers"/>
      <Speakers variant="speakers"/>
    </section>
  )
}

export default SpeakersPage;
