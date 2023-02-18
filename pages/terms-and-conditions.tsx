import Terms from "@/components/sections/Terms";
import React from "react";
import Head from "next/head";

export default function termsAndConditions() {
  return (
    <div className="py-20 bg-gradient-to-b from-[#A64AC9] via-white to-white">
      <Head>
        <title>Terms and conditions</title>
      </Head>
      <Terms />
    </div>
  );
}
