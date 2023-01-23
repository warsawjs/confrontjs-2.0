import Link from "next/link";
import Image from "next/image";
import { TalkShort } from "./TalkShort";
import type { TalkDetails } from "./types";

interface TimelineProps {
  schedule: TalkDetails[];
  variant: "primary" | "secondary";
}

export const Timeline: React.FC<TimelineProps> = ({ schedule, variant }) => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={`/line-${variant}.svg`}
        alt="line element"
        width={8}
        height={10}
        className={`absolute ${
          variant === "primary" ? "right-10" : "left-10"
        } hidden md:block`}
      />
      <div>
        {schedule.map((talk, index) => (
          <TalkShort key={talk.id} talkData={talk} index={index} />
        ))}
      </div>
    </div>
  );
};
