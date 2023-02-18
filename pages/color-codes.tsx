import ColorCodes from "@/components/sections/ColorCodes";
import React from "react";
import Head from "next/head";

export default function colorCodes() {
  return (
    <div className="py-20 bg-gradient-to-b from-[#A64AC9] to-white">
      <Head>
        <title>Color codes</title>
      </Head>
      <ColorCodes />
    </div>
  );
}
