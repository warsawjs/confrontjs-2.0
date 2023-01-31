import { TalkShort } from "./TalkShort";
import type { TalkDetails, LineVariant } from "./types";

interface TimelineProps {
  title: string;
  textContent: string;
  talkList: TalkDetails[];
  lineVariant: LineVariant;
}

export function Line({
  talkList,
  textContent,
  title,
  lineVariant,
}: TimelineProps) {
  return (
    <section className="w-full h-full">
      <div className="text-center">
        <h3
          className={`font-bold text-xl md:text-4xl mb-6 mt-12 md:mt-0 ${
            lineVariant === "one" ? "text-primary" : ""
          }`}
        >
          {title}
        </h3>
        <p>{textContent}</p>
      </div>
      <div className="mt-12 md:mt-18 lg:mt-24">
        {talkList.map((keynote) => (
          <TalkShort
            key={keynote.id}
            talkDetails={keynote}
            lineVariant={lineVariant}
          />
        ))}
      </div>
    </section>
  );
}
