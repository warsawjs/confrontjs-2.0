import { useEffect, useRef } from "react";
import Image from "next/image";
import { format, add } from "date-fns";
import type { TalkDetails } from "./types";

interface TalkShortProps {
  talkData: TalkDetails;
  index: number;
}

export const TalkShort: React.FC<TalkShortProps> = ({ talkData, index }) => {
  const { author, date, durationMin, title } = talkData;
  const articleRef = useRef<HTMLDivElement | null>(null);

  return (
    <article className="mb-24 relative" ref={articleRef}>
      <div>
        <Image
          src="/ellipse-left.svg"
          alt="decoration"
          width={100}
          height={16}
          className="absolute -left-11"
        />
      </div>
      <div className="w-full md:w-3/4">
        <DateTimeDisplay date={date} durationMin={durationMin} />
        <div className="border-2 border-primary rounded-full flex items-center p-3 my-2 w-full">
          <Image
            src="/microphone.svg"
            alt="microphone icon"
            width="30"
            height="30"
          />
          <div className="ml-4 w-2/3 h-20 overflow-y-auto flex flex-col justify-center">
            <h4 className="text-sm md:text-md break-words">{title}</h4>
            <p className="capitalize text-xs md:text-sm font-light mt-2">
              by {author}
            </p>
          </div>
          <div className="bg-primary p-4 rounded-full ml-auto w-12 h-12">
            <Image
              src="/plus-white.svg"
              alt="click for details"
              width="30"
              height="30"
            />
          </div>
        </div>
        <div className="h-px w-12 " />
      </div>
    </article>
  );
};

const DateTimeDisplay: React.FC<Pick<TalkDetails, "date" | "durationMin">> = ({
  date,
  durationMin,
}) => (
  <div className="border border-primary p-2.5 ml-16 font-sans flex items-center w-2/3 md:w-1/2">
    <span className="flex">
      <Image
        src="/callendar.svg"
        alt="callendar icon"
        width="10"
        height="10"
        className="mr-2"
      />
      <p className="text-xs">{format(new Date(date), "d MMM yyy")}</p>
    </span>
    <span className="flex ml-2">
      <Image
        src="/clock.svg"
        alt="clock icon"
        width="10"
        height="10"
        className="mr-1"
      />
      <p className="text-xs">
        {format(new Date(date), "H:mm")} -
        {format(add(new Date(date), { minutes: durationMin }), "H:mm")}
      </p>
    </span>
  </div>
);
