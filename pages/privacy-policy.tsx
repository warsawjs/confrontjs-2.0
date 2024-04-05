import PrivacyPolicy from "@/components/sections/PrivacyPolicy";
import { NextSeo } from "next-seo";

export default function privacyPolicy() {
  return (
    <>
      <NextSeo title="Privacy Policy" />
      <div className="py-20 bg-gradient-to-b from-[#A64AC9] via-white to-white">
        <PrivacyPolicy />
      </div>
    </>
  );
}
