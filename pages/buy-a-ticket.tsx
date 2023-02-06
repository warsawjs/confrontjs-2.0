import Hero from '@/components/sections/Hero';
import { buildStaticProps, useData } from '@/hooks/useRemoteData';
import React from 'react'
import  BuyTicket  from '../components/sections/BuyTicket';

export const getStaticProps = buildStaticProps(['info', 'tickets']);

export default function ({info, tickets}: any) {
    if (process.env.NEXT_PUBLIC_RELOAD) {
      ({tickets} = useData({tickets}));
    }
    return (
    <section className='bg-gradient-to-b from-[#A64AC9] to-white'>
      <Hero variant='ticket' info={info}/>
      <BuyTicket data={tickets}/>
    </section>
    )
  }