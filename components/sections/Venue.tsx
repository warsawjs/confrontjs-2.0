import Link from "next/link"
type Props = { variant: string };
export function Venue({ variant }:Props) {
  return (
  <>
    <div className="flex flex-col items-center py-40 text-base">
      <div className={`${variant === "main" ? "flex" : "hidden"} flex flex-col-reverse lg:flex-row items-center justify-center gap-12`}>
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right justify-between gap-10 py-4">
          <h2 className="font-bold text-xl lg:text-4xl">VENUE</h2>
          <p className="w-[306px] lg:w-[520px]">Palac Kultury is a magnificent and historic venue for ConfrontJS. 
            It offers state-of-the-art amenities, multiple event spaces and easy access. 
            The palace's cultural significance and prime location make it an ideal 
            setting for our conference.
          </p>
          <Link 
            href="/buy-a-ticket"
            className="font-bold px-6 py-4 bg-primary text-white hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out text-sm lg:text-2xl rounded-2xl"
          >
            BUY A TICKET
          </Link>
        </div>
        <div className="w-[306px] lg:w-[523px] h-[310px] rounded-3xl bg-tertiary"></div>
      </div>

      <div className={`${variant === "venue" ? "flex" : "hidden"} flex-col items-center gap-20`}>
        <div className="flex flex-col lg:flex-row justify-center gap-20">
          <div className="w-[306px] h-[310px] lg:w-[452px] lg:h-[524px] rounded-3xl bg-tertiary"></div>
          <div className="flex flex-col text-center lg:text-left justify-around gap-10 py-4">
            <h2 className="font-bold text-2xl">ABOUT PALAC KULTURY</h2>
            <p className="w-[306px] lg:w-[520px]">Palac Kultury, also known as the Palace of Culture, 
            is a stunning and historic venue located in the heart of the city. 
            The palace boasts a variety of event spaces, including grand ballrooms, 
            intimate meeting rooms, and an outdoor terrace. The palace's architecture 
            is a mix of Art-Deco and Soviet-era styles and is considered as a cultural heritage. 
            The palace is equipped with state-of-the-art audio-visual technology and offers ample space for exhibitors, 
            sponsors and attendees.The palace is easily accessible by public transportation and is surrounded 
            by a variety of hotels, restaurants, and shops. It's the perfect location for our Front-End Conference, 
            offering both convenience and elegance for our attendees. The palace's rich history and cultural 
            significance make it an ideal setting for our event, and we are excited to host the conference there.
            </p>
          </div> 
        </div>
        <Link 
            /* will be replaced after setting up CMS */
            href="https://docs.google.com/forms/d/e/1FAIpQLSd4k9O91d66nfxxQG4N1HOrkBLczlQ7ZxaBkN7bnFU7omTB7A/viewform"
            className="font-bold px-6 py-4 bg-primary text-white hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out text-sm lg:text-2xl rounded-2xl">
            BECOME A SPONSOR
        </Link>
      </div>
    </div>
  </>
  )
}
