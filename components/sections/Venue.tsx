import data from "../../data/data.json";
import Link from "next/link";
import Image from "next/image";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

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
          <div className="flex flex-col items-center justify-between gap-5 py-4 text-center lg:items-end lg:text-right">
            <h2 className="text-xl font-bold uppercase lg:text-4xl">VENUE</h2>
            <p className="w-[306px] lg:w-[520px]">{venue.desc}</p>
            <div className="flex justify-center gap-2 py-2 text-4xl text-black">
              {data.sponsors.map((sponsor: any, i: number) => {
                if (sponsor.type === "diamond") {
                  return (
                    <div key={i} className="flex flex-row items-center gap-2">
                      <div className="rounded-xl overflow-hidden border-4 border-[transparent] hover:border-secondary transition-all duration-300 ease-in-out">
                        <Link href={sponsor.url}>
                          <Image
                            width={60}
                            height={30}
                            src={`https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/sponsors/logo-${sponsor.name}.png`}
                            alt={sponsor.name}
                          />
                        </Link>
                      </div>
                      <Link
                        target="_blank"
                        rel="noopener"
                        className="transition-all duration-300 ease-in-out hover:text-secondary"
                        href={sponsor.linkedin}
                      >
                        {<AiFillLinkedin />}
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener"
                        className="transition-all duration-300 ease-in-out hover:text-secondary"
                        href={sponsor.facebook}
                      >
                        {<AiFillFacebook />}
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener"
                        className="transition-all duration-300 ease-in-out hover:text-secondary"
                        href={sponsor.instagram}
                      >
                        {<AiFillInstagram />}
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener"
                        className="transition-all duration-300 ease-in-out hover:text-secondary"
                        href={sponsor.youtube}
                      >
                        {<AiFillYoutube />}
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
            <Link
              href="/buy-a-ticket"
              className="px-6 py-4 text-sm font-bold text-white transition-all duration-300 ease-in-out bg-primary hover:bg-secondary hover:text-black lg:text-2xl rounded-2xl"
            >
              BUY A TICKET
            </Link>
          </div>
          <div className="flex items-center w-[306px] lg:w-[523px] h-[210px] lg:h-[380px] rounded-3xl overflow-hidden drop-shadow-xl">
            <Link href="/venue">
              <Image
                width={800}
                height={1200}
                src={venue.img}
                alt="venue picture"
              />
            </Link>
          </div>
        </div>

        <div
          className={`${
            variant === "venue" ? "flex" : "hidden"
          } flex-col items-center gap-20`}
        >
          <div className="flex flex-col justify-center gap-10 lg:flex-row">
            <div className="flex items-center w-[306px] h-[210px] lg:w-[452px] lg:h-[340px] rounded-3xl overflow-hidden drop-shadow-xl">
              <Image
                width={800}
                height={1200}
                src={venue.img}
                alt="venue picture"
              />
            </div>
            <div className="flex flex-col justify-around gap-5 py-4 text-center lg:items-start lg:text-left">
              <h2 className="text-2xl font-bold uppercase">About BEC</h2>
              <p className="w-[306px] lg:w-[520px]">{venue.about}</p>
              <h2 className="pt-2 font-bold">Learn more about BEC:</h2>
              <div className="flex justify-center gap-2 text-4xl text-black">
                {data.sponsors.map((sponsor: any, i: number) => {
                  if (sponsor.type === "diamond") {
                    return (
                      <div key={i} className="flex flex-row items-center gap-2">
                        <div className="rounded-xl overflow-hidden border-4 border-[transparent] hover:border-secondary transition-all duration-300 ease-in-out">
                          <Link href={sponsor.url}>
                            <Image
                              width={60}
                              height={30}
                              src={`https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/sponsors/logo-${sponsor.name}.png`}
                              alt={sponsor.name}
                            />
                          </Link>
                        </div>
                        <Link
                          target="_blank"
                          rel="noopener"
                          className="transition-all duration-300 ease-in-out hover:text-secondary"
                          href={sponsor.linkedin}
                        >
                          {<AiFillLinkedin />}
                        </Link>
                        <Link
                          target="_blank"
                          rel="noopener"
                          className="transition-all duration-300 ease-in-out hover:text-secondary"
                          href={sponsor.facebook}
                        >
                          {<AiFillFacebook />}
                        </Link>
                        <Link
                          target="_blank"
                          rel="noopener"
                          className="transition-all duration-300 ease-in-out hover:text-secondary"
                          href={sponsor.instagram}
                        >
                          {<AiFillInstagram />}
                        </Link>
                        <Link
                          target="_blank"
                          rel="noopener"
                          className="transition-all duration-300 ease-in-out hover:text-secondary"
                          href={sponsor.youtube}
                        >
                          {<AiFillYoutube />}
                        </Link>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
