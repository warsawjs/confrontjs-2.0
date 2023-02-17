import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import { fetchData } from "@/hooks/useRemoteData";

type params = {
  slug: string;
  params: any;
  speaker: any;
};

export async function getStaticPaths() {
  const speakers = await fetchData("speakers");
  const paths = speakers.map((speaker: any) => `/speakers/${speaker.slug}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: params) {
  const speakers = await fetchData("speakers");
  const speaker = speakers.find((speaker: any) => speaker.slug === params.slug);
  return { props: { speaker } };
}

export default function Speaker({ speaker }: params) {
  return (
    <div className="flex flex-col items-center gap-20 py-40 bg-gradient-to-b from-[#A64AC9] via-white to-white">
      <div className="flex flex-col items-center text-center gap-5 lg:gap-10">
        <h2 className="text-sm lg:text-3xl">24 MARCH 2023 IN WARSAW, POLAND</h2>
        <h1 className="font-bold text-3xl lg:text-[75px]">{speaker.name}</h1>
        <div className="flex flex-row gap-2 text-xl text-white lg:text-3xl">
          <h2 title="company">{speaker.company}</h2>
          <h2 title="position">{speaker.position}</h2>
        </div>
        <div className="flex items-center w-[145px] h-[145px] lg:w-[300px] lg:h-[300px] my-10 rounded-xl bg-white overflow-hidden drop-shadow-xl shadow-[#392740]">
          <Image width={400} height={400} alt="avatar" src={speaker.avatar} />
        </div>
        <div className="text-4xl text-primary flex justify-center items-center gap-2 py-2">
          {speaker.twitter !== "" ? (
            <Link
              className="hover:text-secondary transition-all duration-300 ease-in-out"
              href={speaker.twitter}
            >
              {<AiFillTwitterCircle />}
            </Link>
          ) : (
            ""
          )}
          {speaker.instagram !== "" ? (
            <Link
              className="hover:text-secondary transition-all duration-300 ease-in-out"
              href={speaker.instagram}
            >
              {<AiFillInstagram />}
            </Link>
          ) : (
            ""
          )}
          {speaker.facebook !== "" ? (
            <Link
              className="hover:text-secondary transition-all duration-300 ease-in-out"
              href={speaker.facebook}
            >
              {<AiFillFacebook />}
            </Link>
          ) : (
            ""
          )}
          {speaker.linkedin !== "" ? (
            <Link
              className="hover:text-secondary transition-all duration-300 ease-in-out"
              href={speaker.linkedin}
            >
              {<AiFillLinkedin />}
            </Link>
          ) : (
            ""
          )}
          {speaker.website !== "" ? (
            <Link
              className="hover:text-secondary text-3xl transition-all duration-300 ease-in-out"
              href={speaker.website}
            >
              {<BsGlobe2 />}
            </Link>
          ) : (
            ""
          )}
        </div>
        <p className="w-[245px] lg:w-[700px] text-[10px] lg:text-">
          {speaker.bio}
        </p>
      </div>
      <div>
        <Link
          href="/buy-a-ticket"
          className="px-6 py-4 bg-tertiary text-secondary hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out rounded-2xl"
        >
          BUY A TICKET
        </Link>
      </div>
    </div>
  );
}
