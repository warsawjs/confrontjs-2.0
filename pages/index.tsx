import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Schedule } from "@/components/sections/Schedule";
import { Venue } from "@/components/sections/Venue";
import { Numbers } from "@/components/Numbers";
import { Organizers } from "@/components/sections/Organizers";
import Hero from "@/components/sections/Hero";
import Pictures from "@/components/sections/Pictures";
import Testimonials from "@/components/sections/Testimonials";
import Speakers from "@/components/sections/Speakers";
import BecomeSponsor from "@/components/sections/BecomeSponsor";
const secondary = "#17E9E0";



const inter = Inter({ subsets: ["latin"] });

export default function MainPage() {
  return (
  <section>
    <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
      <Hero variant="main"/>
      <Numbers color={secondary}/>
    </div>

    <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
      <Speakers variant="main"/>
      <BecomeSponsor/>
      <Schedule/>
    </div>
    
    <div className="bg-gradient-to-b from-[#A64AC9] via-white to-white">
      <Organizers/>
      <Venue variant="main"/>
      <Pictures/>
      <Testimonials/>
    </div>
    
  </section>
  );
}
