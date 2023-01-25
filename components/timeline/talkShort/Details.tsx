import Image from "next/image";
import type { TalkDetails, Track } from "../types";

type TalkDetailsProps = Pick<TalkDetails, "author" | "title"> & {
  variant: Track;
};

export const Details: React.FC<TalkDetailsProps> = ({
  author,
  title,
  variant,
}) => {
  return (
    <div
      data-position={variant === "one" ? "left" : "right"}
      className={`border-2 ${
        variant === "one" ? "border-primary" : "border-secondary"
      } rounded-full flex items-center p-3 pl-7 my-2 w-full`}
    >
      <Image
        src="/microphone.svg"
        alt="microphone icon"
        width="30"
        height="30"
      />
      <div className="ml-4 w-2/3 h-[61px] overflow-y-auto flex flex-col justify-center">
        <h4 className="text-xs break-words">{title}</h4>
        <p className="capitalize text-[10px] font-light mt-2">by {author}</p>
      </div>
      <div
        className={`${
          variant === "one" ? "bg-primary" : "bg-secondary"
        } p-4 rounded-full ml-auto w-12 h-12 shrink-0 cursor-pointer z-10`}
      >
        <Image
          src="/plus-white.svg"
          alt="click for details"
          width="30"
          height="30"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};
