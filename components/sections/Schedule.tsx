import { useState } from "react";
import { Timeline } from "@/components/timeline/Timeline";
import { timelineData } from "@/mockData/timelineData";
import type { Track } from "@/components/timeline/types";

export function Schedule() {
  const [activeTimeline, setActiveTimeline] = useState<Track>("one");

  return (
    <section className="container mx-auto md:flex gap-5">
      <div className="md:hidden flex justify-evenly my-6">
        <button
          className="py-3 px-8 border-2 border-primary rounded-full"
          onClick={() => setActiveTimeline("one")}
        >
          Line1
        </button>
        <button
          className="py-3 px-8 border-2 border-secondary rounded-full"
          onClick={() => setActiveTimeline("two")}
        >
          Line2
        </button>
      </div>
      <div className="md:hidden w-full">
        {activeTimeline === "one" && (
          <Timeline schedule={timelineData} variant="one" />
        )}
        {activeTimeline === "two" && (
          <Timeline schedule={timelineData} variant="two" />
        )}
      </div>
      <div className="hidden md:flex w-full">
        <Timeline schedule={timelineData} variant="one" />
        <Timeline schedule={timelineData} variant="two" />
      </div>
    </section>
  );
}
