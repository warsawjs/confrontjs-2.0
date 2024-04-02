import Terms from "@/components/sections/Terms";
import { NextSeo } from "next-seo";

export default function termsAndConditions() {
  return (
    <>
      <NextSeo title="Terms and Conditions" />
      <div className="py-20 bg-gradient-to-b from-[#A64AC9] via-white to-white">
        <Terms />
      </div>
    </>
  );
}
