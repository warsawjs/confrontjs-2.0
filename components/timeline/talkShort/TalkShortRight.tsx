import { useEffect } from "react";
import Image from "next/image";
import { DatetimeDisplay } from "./DatetimeDisplay";
import { Details } from "./Details";
import type { TalkDetails } from "../types";

interface TalkShortProps {
  talkData: TalkDetails;
  index: number;
}

export const TalkShortRight: React.FC<TalkShortProps> = ({
  talkData,
  index,
}) => {
  const { author, date, timeFrom, timeTo, title } = talkData;

  return (
    <article className="mb-24 relative ml-2 flex justify-end">
      <div>
        <Image
          src="/ellipse-right.svg"
          alt="decoration"
          width={87}
          height={16}
          className="absolute -right-[41px]"
        />
      </div>
      <div className="w-full md:w-3/4">
        <DatetimeDisplay
          date={date}
          timeFrom={timeFrom}
          timeTo={timeTo}
          variant="two"
        />
        <Details author={author} title={title} variant="two" />
        <div className="h-px w-12" />
      </div>
    </article>
  );
};
