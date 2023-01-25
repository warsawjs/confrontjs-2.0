import Image from "next/image";
import type { TalkDetails, Track } from "../types";

type DatetimeDisplayProps = Pick<
  TalkDetails,
  "date" | "timeFrom" | "timeTo"
> & { variant: Track };

export const DatetimeDisplay: React.FC<DatetimeDisplayProps> = ({
  date,
  timeFrom,
  timeTo,
  variant,
}) => (
  <div
    className={`border ${
      variant === "one"
        ? "border-primary mr-auto ml-[53px]"
        : "border-secondary ml-auto mr-[53px]"
    } py-2 font-sans flex items-center justify-center w-3/4 lg:w-1/2`}
  >
    <span className="flex">
      <Image
        src="/callendar.svg"
        alt="callendar icon"
        width="10"
        height="10"
        className="mr-2"
      />
      <p className="text-xs">{date}</p>
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
        {timeFrom} - {timeTo}
      </p>
    </span>
  </div>
);
