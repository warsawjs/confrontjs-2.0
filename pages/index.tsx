import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Schedule } from "@/components/sections/Schedule";
import { Speakers } from "@/components/sections/Speakers";
import { Venue } from "@/components/sections/Venue";
import { Why } from "@/components/sections/Why";


const inter = Inter({ subsets: ["latin"] });

export default function MainPage() {
  return (<>
    <Why/>
    <Speakers/>
    <Schedule/>
    <Venue/>
  </>);
}
