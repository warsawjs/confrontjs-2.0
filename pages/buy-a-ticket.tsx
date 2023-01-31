import Hero from '@/components/sections/Hero';
import React from 'react'
import  BuyTicket  from '../components/sections/BuyTicket';

export default function () {
    return (
    <section className='bg-gradient-to-b from-[#A64AC9] to-white'>
      <Hero variant='ticket'/>
      <BuyTicket/>
    </section>
    )
  }