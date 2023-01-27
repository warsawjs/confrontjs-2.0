import React from 'react'
import Link from 'next/link'

export default function BecomeSponsor() {
  return (
    <div className='flex flex-col items-center text-center gap-5 py-20'>
        <h2 className="font-bold text-xl text-black lg:text-4xl">BECOME A SPONSOR</h2>
        <p className="w-[306px] lg:w-[750px] text-xs text-black lg:text-base">
          Dor ohur. Speras mikrong jepogt. Tångar nasam an. Emstat jyde. Are
          benar. Udås tåbel stenoligt. Märk-dna bida, polyrad. Lyssna in
          utsmarta. Söjojysk. Mikrons ultrang: om än sad. Ressade bek antitism.
          Sofav telenilig. Matilda Gustavsson n
        </p>
        <div className="flex flex-col lg:flex-row gap-5 py-10">
          <Link
            /* will be replaced after setting up CMS */
            href="https://docs.google.com/forms/d/e/1FAIpQLSd4k9O91d66nfxxQG4N1HOrkBLczlQ7ZxaBkN7bnFU7omTB7A/viewform"
            className="font-bold px-6 py-4 border-2 text-black hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out rounded-2xl"
          >
            BECOME A SPONSOR
          </Link>
          <Link
            href="/buy-a-ticket"
            className="font-bold px-6 py-4 bg-tertiary text-secondary hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out rounded-2xl"
          >
            BUY A TICKET
          </Link>
        </div>
    </div>
  )
}
