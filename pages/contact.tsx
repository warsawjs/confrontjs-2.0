import Contact from "@/components/sections/Contact";
import React from "react";
import Head from "next/head";

export default function contact() {
  return (
    <div className="py-20 bg-gradient-to-b from-[#A64AC9] via-white to-white">
      <Head>
        <title>Contact</title>
      </Head>
      <Contact />
    </div>
  );
}
