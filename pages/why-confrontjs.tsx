import { Numbers } from "@/components/Numbers";
import Hero from "@/components/sections/Hero";
import PreviousConfrences from "@/components/sections/PreviousConfrences";
import Testimonials from "@/components/sections/Testimonials";
const primary = "#A64AC9";


export function WhyConfrontPage() {
  return (
  <>
    <Hero variant="about"/>
    <Numbers color={primary}/>
    <Testimonials/>
    <PreviousConfrences/>
  </>
  )
}

export default WhyConfrontPage;
