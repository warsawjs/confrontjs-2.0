import { Numbers } from "@/components/Numbers";
import Hero from "@/components/sections/Hero";
import PreviousConfrences from "@/components/sections/PreviousConfrences";
import Testimonials from "@/components/sections/Testimonials";
const primary = "#A64AC9";


export function WhyConfrontPage() {
  return (
  <section>
    <div className="bg-gradient-to-b from-[#A64AC9] to-white">
      <Hero variant="about"/>
      <Numbers color={primary}/>
    </div>

    <Testimonials/>
    <PreviousConfrences/>
  </section>
  )
}

export default WhyConfrontPage;
