import { useState } from "react";
import Image from "next/image";
import type { LineVariant, TalkDetails } from "./types";

interface TalkShortProps {
  talkDetails: TalkDetails;
  lineVariant: LineVariant;
}

export function TalkShort({ lineVariant, talkDetails }: TalkShortProps) {
  const [open, setOpen] = useState(false);
  const { author, date, description, timeFrom, timeTo, title, picture } =
    talkDetails;

  return (
    <article className="mb-10 md:mb-12">
      <div className="flex items-center ml-9 mb-1">
        <div className="flex">
          <Image
            src="/clock.svg"
            alt="scheduled talk time"
            width="10"
            height="10"
            className="mr-2"
          />
          <span className="font-bold text-sm">
            {timeFrom} - {timeTo}
          </span>
        </div>
        <div className="ml-4 flex">
          <Image
            src="/callendar.svg"
            alt="scheduled talk time"
            width="10"
            height="10"
            className="mr-2"
          />
          <span className="font-bold text-sm">{date}</span>
        </div>
      </div>
      <div className="relative">
        <div
          className={`bg-white px-9 py-5 border-2 rounded-[40px] relative z-20 ${
            lineVariant === "one" ? "border-primary" : "border-secondary"
          }`}
        >
          <div className="flex justify-between items-center">
            <div>
              <h5 className="font-semibold text-lg mb-1">{title}</h5>
              <span className="block text-xs">
                {author !== "" ? "By" : ""} {author}
              </span>
            </div>
            <Image
              src={picture}
              style={{
                borderRadius: "60px",
                border: "2px",
                borderStyle: "solid",
                borderColor: "#A64AC9",
              }}
              width="60"
              height="60"
              alt="avatar"
            />
          </div>
          <p
            className={`text-sm overflow-hidden transition-all duration-250 ease-in-out ${
              open ? "max-h-[1000px] mt-4" : "max-h-0 mt-0"
            }`}
          >
            {description}
          </p>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`w-16 h-16 pb-1.5 flex justify-center items-end rounded-full absolute -bottom-6 left-1/2 -translate-x-1/2 cursor-pointer z-10 ${
            lineVariant === "one" ? "bg-primary" : "bg-secondary"
          }`}
        >
          <Image
            src={
              lineVariant === "one"
                ? "/chevron-down-white.svg"
                : "/chevron-down-black.svg"
            }
            alt="open/close button"
            width="20"
            height="20"
            className={`${
              open ? "rotate-180" : "rotate-0"
            } transition duration-250 ease-in-out`}
          />
        </div>
      </div>
    </article>
  );
}
