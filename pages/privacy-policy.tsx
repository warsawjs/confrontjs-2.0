import PrivacyPolicy from "@/components/sections/PrivacyPolicy";
import React from "react";
import Head from "next/head";

export default function privacyPolicy() {
  return (
    <div className="py-20 bg-gradient-to-b from-[#A64AC9] via-white to-white">
      <Head>
        <title>Privacy and policy</title>
      </Head>
      <PrivacyPolicy />
    </div>
  );
}
