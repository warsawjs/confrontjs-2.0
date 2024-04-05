import ColorCodes from "@/components/sections/ColorCodes";
import { NextSeo } from "next-seo";

export default function colorCodes() {
  return (
    <>
      <NextSeo title="Color Codes" />
      <div className="py-20 bg-gradient-to-b from-[#A64AC9] to-white">
        <ColorCodes />
      </div>
    </>
  );
}
