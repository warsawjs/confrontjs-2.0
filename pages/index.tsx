import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Schedule } from "@/components/sections/Schedule";
import { Speakers } from "@/components/sections/Speakers";
import { Venue } from "@/components/sections/Venue";
import { Numbers } from "@/components/Numbers";
import { Organizers } from "@/components/sections/Organizers";
import Hero from "@/components/sections/Hero";
const secondary = "#17E9E0";



const inter = Inter({ subsets: ["latin"] });

export default function MainPage() {
  return (
  <>
    <Hero variant="main"/>
    <Numbers color={secondary}/>
    <Speakers/>
    <Schedule/>
    <Organizers/>
    <Venue variant="main"/>
  </>
  );
}
