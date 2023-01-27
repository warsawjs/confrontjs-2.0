import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import data from "../../data/data.json";


type params = {
  slug: string;
  params: any;
  speaker: any;
};


export async function getStaticPaths() {
  const paths = data.speakers.map((speaker) => `/speakers/${speaker.slug}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: params) {
  const speaker = data.speakers.find((speaker) => speaker.slug === params.slug);
  return { props: { speaker } };
}

export default function Speaker({ speaker }: params) {
  return (

    <div className="flex flex-col items-center gap-20 py-40 bg-gradient-to-b from-[#A64AC9] via-white to-white">
      <div className="flex flex-col items-center text-center gap-5 lg:gap-10">
        <h2 className="text-sm lg:text-3xl">24MARCH 2023 IN WARSAW, POLAND</h2>
        <h1 className="font-bold text-3xl lg:text-[75px]">{speaker.name}</h1>
        <div className="flex flex-row text-xl text-white lg:text-5xl">
          <h2>{speaker.company}</h2>
          <h2>+{speaker.position}</h2>
        </div>
        <div className="w-[145px] h-[145px] lg:w-[300px] lg:h-[300px] my-10 rounded-xl bg-white overflow-hidden drop-shadow-xl shadow-[#392740]">
        <Image
          width={300}
          height={300}
          alt="avatar"
          src={speaker.avatar}
        />
        </div>
        <div className="text-4xl text-primary flex justify-center gap-2 py-2">
          <Link className="hover:text-secondary transition-all duration-300 ease-in-out" href={speaker.social}>{<AiFillTwitterCircle />}</Link>
          <Link className="hover:text-secondary transition-all duration-300 ease-in-out" href="">{<AiFillInstagram />}</Link>
          <Link className="hover:text-secondary transition-all duration-300 ease-in-out" href="">{<AiFillFacebook />}</Link>
        </div>
        <p className="w-[245px] lg:w-[700px] text-[10px] lg:text-">{speaker.bio}</p>
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
  )
}
