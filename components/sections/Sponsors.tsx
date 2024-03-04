import Image from "next/image";
import Link from "next/link";
import data from "../../data/data.json";

export default function Sponsors() {
  const diamondSponsors = data.sponsors.filter(
    (sponsor) => sponsor.type === "diamond"
  );
  const goldSponsors = data.sponsors.filter(
    (sponsor) => sponsor.type === "gold"
  );
  const silverSponsors = data.sponsors.filter(
    (sponsor) => sponsor.type === "silver"
  );

  return (
    <div className="flex flex-col items-center justify-center py-40 lg:px-40">
      <div className="flex flex-col">
        <div className="flex justify-center text-center">
          <h2 className="text-xl font-bold text-white uppercase lg:text-4xl">
            sponsors
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 pt-10">
          {!!diamondSponsors.length && (
            <div className="flex flex-col items-center justify-center pt-20 text-center">
              <h1 className="pb-20 text-lg font-bold text-black lg:text-3xl">
                Diamond sponsor
              </h1>
              <div className="flex items-center justify-center gap-20">
                {diamondSponsors.map((sponsor, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out cursor-pointer w-72 h-30 rounded-xl opacity-80 hover:opacity-100"
                  >
                    <Link href={sponsor.url}>
                      <Image
                        width={1200}
                        height={600}
                        src={`https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/sponsors/logo-${sponsor.name}.png`}
                        alt={sponsor.name}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
          {!!goldSponsors.length && (
            <div className="flex flex-col items-center justify-center pt-20 text-center">
              <h1 className="pb-20 text-lg font-bold text-black lg:text-3xl">
                Gold sponsor
              </h1>
              <div className="flex items-center justify-center gap-20">
                {goldSponsors.map((sponsor, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out cursor-pointer w-72 h-30 rounded-xl opacity-80 hover:opacity-100"
                  >
                    <Link href={sponsor.url}>
                      <Image
                        width={1000}
                        height={500}
                        src={`https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/sponsors/logo-${sponsor.name}.png`}
                        alt={sponsor.name}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
          {silverSponsors.length && (
            <div className="flex flex-col items-center justify-center pt-20 text-center">
              <h1 className="pb-20 text-lg font-bold text-black lg:text-3xl">
                Silver sponsors
              </h1>
              <div className="flex justify-center w-full lg:w-[800px] gap-20 flex-wrap">
                {silverSponsors.map((sponsor, i) => (
                  <Link
                    key={i}
                    href={sponsor.url}
                    className="relative flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out cursor-pointer rounded-xl opacity-80 hover:opacity-100 h-24 w-64"
                  >
                    <Image
                      fill
                      className="object-contain"
                      src={`https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/sponsors/logo-${sponsor.name}.png`}
                      alt={sponsor.name}
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
