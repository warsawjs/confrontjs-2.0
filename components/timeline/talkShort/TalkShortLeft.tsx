import { useEffect } from "react";
import Image from "next/image";
import { DatetimeDisplay } from "./DatetimeDisplay";
import { Details } from "./Details";
import { useCardToLineDistance } from "@/hooks/useCardToLineDistance";

import type { TalkDetails } from "../types";

interface TalkShortProps {
  talkData: TalkDetails;
  index: number;
}

export const TalkShortLeft: React.FC<TalkShortProps> = ({
  talkData,
  index,
}) => {
  const { author, date, timeFrom, timeTo, title } = talkData;

  return (
    <article className="mb-24 relative mr-2">
      <div>
        <Image
          src="/ellipse-left.svg"
          alt="decoration"
          width={87}
          height={16}
          className="absolute -left-10"
        />
      </div>
      <div className="w-full md:w-3/4">
        <DatetimeDisplay
          date={date}
          timeFrom={timeFrom}
          timeTo={timeTo}
          variant="one"
        />
        <Details author={author} title={title} variant="one" />
        <div className="h-px w-12 " />
      </div>
    </article>
  );
};
