import Contact from "@/components/sections/Contact";
import { NextSeo } from "next-seo";

export default function contact() {
  return (
    <>
      <NextSeo title="Contact" />
      <div className="py-20 bg-gradient-to-b from-[#A64AC9] via-white to-white">
        <Contact />
      </div>
    </>
  );
}
