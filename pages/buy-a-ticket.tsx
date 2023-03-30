import Hero from "@/components/sections/Hero";
import Head from "next/head";
import React from "react";
import BuyTicket from "../components/sections/BuyTicket";
import data from ".././data/data.json";
import { Info } from "@/types";
const info: Info = data.info;
const tickets = data.tickets;

export default function buyATicket() {
  return (
    <section className="bg-gradient-to-b from-[#A64AC9] to-white">
      <Head>
        <title>Buy a ticket</title>
      </Head>
      <Hero variant="ticket" info={info} />
      <BuyTicket data={tickets} />
    </section>
  );
}
