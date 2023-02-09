import Link from "next/link";
import Image from "next/image";

type Props = { variant: string; info: any; venue: any };

export function Venue({ info, venue, variant }: Props) {
  return (
    <>
      <div className="flex flex-col items-center py-20 text-base">
        <div
          className={`${
            variant === "main" ? "flex" : "hidden"
          } flex flex-col-reverse lg:flex-row items-center justify-center gap-12`}
        >
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right justify-between gap-10 py-4">
            <h2 className="font-bold text-xl lg:text-4xl uppercase">VENUE</h2>
            <p className="w-[306px] lg:w-[520px]">{venue.desc}</p>
            <Link
              href="/buy-a-ticket"
              className="font-bold px-6 py-4 bg-primary text-white hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out text-sm lg:text-2xl rounded-2xl"
            >
              BUY A TICKET
            </Link>
          </div>
          <div className="flex items-center w-[306px] lg:w-[523px] h-[310px] rounded-3xl overflow-hidden drop-shadow-xl">
            <Image
              width={800}
              height={1000}
              src={venue.img}
              alt="venue picture"
            />
          </div>
        </div>

        <div
          className={`${
            variant === "venue" ? "flex" : "hidden"
          } flex-col items-center gap-20`}
        >
          <div className="flex flex-col lg:flex-row justify-center gap-20">
            <div className="flex items-center w-[306px] h-[310px] lg:w-[452px] lg:h-[524px] rounded-3xl overflow-hidden drop-shadow-xl">
              <Image
                width={800}
                height={1000}
                src={venue.img}
                alt="venue picture"
              />
            </div>
            <div className="flex flex-col text-center lg:text-left justify-around gap-10 py-4">
              <h2 className="font-bold text-2xl uppercase">
                About Pałac Kultury
              </h2>
              <p className="w-[306px] lg:w-[520px]">{venue.about}</p>
            </div>
          </div>
          <Link
            href={info.sponsorLink}
            className="font-bold px-6 py-4 bg-primary text-white hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out text-sm lg:text-2xl rounded-2xl"
          >
            BECOME A SPONSOR
          </Link>
        </div>
      </div>
    </>
  );
}
