import React from "react";
import Link from "next/link";
import Head from "next/head";
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
  const paths = speakers.map((speaker: any) => ({
    params: { slug: speaker.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }: params) {
  const speakers = await fetchData("speakers");
  const speaker = speakers.find((speaker: any) => speaker.slug === params.slug);
  return { props: { speaker } };
}

export default function Speaker({ speaker }: params) {
  return (
    <div className="flex flex-col items-center gap-20 py-20 bg-gradient-to-b from-[#A64AC9] via-white to-white">
      <Head>
        <title>{speaker.name}</title>
      </Head>
      <div className="flex flex-col items-center gap-5 text-center lg:gap-10">
        {/* <h2 className="text-sm lg:text-3xl">12 APRIL 2024 IN WARSAW, POLAND</h2> */}

        <div className="flex items-center w-[145px] h-[145px] lg:w-[300px] lg:h-[300px] my-10 rounded-xl bg-white overflow-hidden drop-shadow-xl shadow-[#392740]">
          <Image
            fill
            style={{ objectFit: "cover" }}
            alt="avatar"
            src={speaker.avatar}
          />
        </div>
        <h1 className="font-bold text-3xl lg:text-[75px]">{speaker.name}</h1>
        <div className="flex flex-row gap-2 text-sm font-bold text-black lg:text-xl">
          <h2 title="company">{speaker.company}</h2>
          <h2 title="position">{speaker.position}</h2>
        </div>
        <p className="w-[245px] lg:w-[700px] text-xs lg:text-sm lg:text-">
          {speaker.bio}
        </p>
        <div className="flex items-center justify-center gap-2 py-2 text-4xl text-primary">
          {speaker.twitter !== "" ? (
            <Link
              className="transition-all duration-300 ease-in-out hover:text-secondary"
              href={speaker.twitter}
            >
              {<AiFillTwitterCircle />}
            </Link>
          ) : (
            ""
          )}
          {speaker.instagram !== "" ? (
            <Link
              className="transition-all duration-300 ease-in-out hover:text-secondary"
              href={speaker.instagram}
            >
              {<AiFillInstagram />}
            </Link>
          ) : (
            ""
          )}
          {speaker.facebook !== "" ? (
            <Link
              className="transition-all duration-300 ease-in-out hover:text-secondary"
              href={speaker.facebook}
            >
              {<AiFillFacebook />}
            </Link>
          ) : (
            ""
          )}
          {speaker.linkedin !== "" ? (
            <Link
              className="transition-all duration-300 ease-in-out hover:text-secondary"
              href={speaker.linkedin}
            >
              {<AiFillLinkedin />}
            </Link>
          ) : (
            ""
          )}
          {speaker.website !== "" ? (
            <Link
              className="text-3xl transition-all duration-300 ease-in-out hover:text-secondary"
              href={speaker.website}
            >
              {<BsGlobe2 />}
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <Link
          href="/buy-a-ticket"
          className="px-6 py-4 transition-all duration-300 ease-in-out bg-tertiary text-secondary hover:bg-secondary hover:text-black rounded-2xl"
        >
          BUY A TICKET
        </Link>
      </div>
    </div>
  );
}
