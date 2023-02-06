import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function PreviousConfrences({ data = [], info }: any) {
  return (
    <div className="flex flex-col justify-center py-40 px-20 lg:px-40 gap-20">
      <div className="flex flex-col text-center items-center gap-5">
        <h1 className="font bold text-xl lg:text-4xl uppercase">The previous confrences</h1>
        <p className="w-[306px] lg:w-[750px] text-xs lg:text-base">{info.previousConferences}</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        {data.map((conference: any) => {
            return(
                <div className='flex flex-col items-center gap-5 pb-20'>
                    <h2 className='font-bold text-xl lg:text-2xl'>{conference.title}</h2>
                    <div className='w-[260px] h-[310px] lg:w-[438px] lg:h-[375px] bg-tertiary rounded-3xl'>
                        <img
                            className='w-full'
                            src={conference.picture}
                            alt={conference.title}
                        />
                    </div>
                    <p className='text-xs'>{conference.description}</p>
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
