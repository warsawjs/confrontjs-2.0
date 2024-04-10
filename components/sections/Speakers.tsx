import Image from "next/image";
import Link from "next/link";

type Props = {
  variant: String;
  data: any;
  info: any;
};

export default function Speakers({ variant, data, info }: Props) {
  const isMainVariant = variant === "main";
  const isSpeakersVariant = variant === "speakers";
  const speakersData = isMainVariant ? data.slice(0, 6) : data;

return (
  <div className="flex flex-col gap-20 px-5 py-20 lg:px-40">
    {isMainVariant && (
      <div className="flex flex-col items-center gap-5 text-center">
        <h2 className="text-xl font-bold text-black uppercase lg:text-4xl">
          SPEAKERS
        </h2>
        <p className="w-[306px] lg:w-[750px] text-xs text-black lg:text-base">
          {info.speakersDescription}
        </p>
      </div>
    )}
    <div className="grid grid-cols-2 lg:grid-cols-3">
      {speakersData
        .filter((s: any) => s.id && !isNaN(s.id))
        .map((speaker: any, i: number) => {
          return (
            <div key={i} className="flex flex-col items-center gap-5 pb-10">
              <Link
                href={`speakers/${speaker.slug}`}
                className="relative w-[145px] h-[145px] lg:w-[300px] lg:h-[300px] flex items-end justify-center rounded-3xl bg-white overflow-hidden drop-shadow-xl shadow-[#392740]"
              >
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  alt="avatar"
                  src={speaker.avatar}
                />
              </Link>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-sm font-bold lg:text-2xl">
                  <Link className="relative" href={`speakers/${speaker.slug}`}>
                    {speaker.name}
                  </Link>
                </h3>
                <p className="text-[10px] lg:text-xs">{speaker.company}</p>
              </div>
            </div>
          );
        })}
    </div>
    <div className="flex items-center justify-center">
      <Link
        href={isMainVariant ? "/speakers" : "/buy-a-ticket"}
        className="px-6 py-4 text-sm font-bold uppercase transition-all duration-300 ease-in-out lg:text-xl bg-tertiary text-secondary hover:bg-secondary hover:text-black rounded-2xl"
      >
        {isMainVariant
          ? "SEE ALL SPEAKERS"
          : isSpeakersVariant
          ? "BUY A TICKET"
          : ""}
      </Link>
    </div>
  </div>
);
}
