import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import data from '../../data/data.json';


export default function PreviousConfrences() {
  return (
    <div className="flex flex-col justify-center py-40 px-20 lg:px-40 gap-20">
      <div className="flex flex-col text-center items-center gap-5">
        <h1 className="font bold text-xl lg:text-4xl">THE PREVOIUS CONFRENCES</h1>
        <p className="w-[306px] lg:w-[750px] text-xs lg:text-base">Dor ohur. Speras mikrong jepogt. Tångar nasam an. Emstat jyde. Are benar. Udås tåbel stenoligt. Märk-dna bida, polyrad. Lyssna in utsmarta. Söjojysk. Mikrons ultrang: om än sad. Ressade bek antitism. Sofav telenilig. Matilda Gustavsson n</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        {data.PreviousConferences.map((conference) => {
            return(
                <div className='flex flex-col items-center gap-5 pb-20'>
                    <h2 className='font-bold text-xl lg:text-2xl'>{conference.title}</h2>
                    <div className='w-[260px] h-[310px] lg:w-[438px] lg:h-[375px] bg-tertiary rounded-3xl'>
                        {/* <Image
                            src={confrence.picture}
                            alt={confrence.title}
                        /> */}
                    </div>
                    {/* <p className='text-xs'>{conference.description}</p>  */}
                    <Link
                        className='px-6 py-4 bg-primary rounded-xl text-sm text-white'
                        href={conference.url}
                    >
                        SEE MORE PHOTOS
                    </Link>       
                </div>
            )
        })}
      </div>
    </div>
  )
}
