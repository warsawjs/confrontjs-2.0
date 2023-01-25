import Link from "next/link";
import Image from "next/image";
import { TalkShortLeft } from "./talkShort/TalkShortLeft";
import { TalkShortRight } from "./talkShort/TalkShortRight";
import type { TalkDetails, Track } from "./types";

interface TimelineProps {
  schedule: TalkDetails[];
  variant: Track;
}

export const Timeline: React.FC<TimelineProps> = ({ schedule, variant }) => {
  return (
    <div className="w-full h-full relative">
      <Image
        id={`line-${variant === "one" ? "left" : "right"}`}
        src={`/line-${variant === "one" ? "left" : "right"}.svg`}
        alt="line element"
        width={8}
        height={10}
        className={`absolute ${
          variant === "one" ? "right-0 md:right-10" : "left-0 md:left-10"
        }`}
      />
      <div>
        {schedule.map((talk, index) =>
          variant === "one" ? (
            <TalkShortLeft key={talk.id} talkData={talk} index={index} />
          ) : (
            <TalkShortRight key={talk.id} talkData={talk} index={index} />
          )
        )}
      </div>
    </div>
  );
};
