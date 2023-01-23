import { useState } from "react";
import { Timeline } from "@/components/timeline/Timeline";

import { timelineData } from "@/mockData/timelineData";

export default function Schedule() {
  const [activeTimeline, setActiveTimeline] = useState<
    "primary" | "secondnary"
  >("primary");

  return (
    <section className="container mx-auto md:flex gap-5 px-4">
      <div className="md:hidden flex justify-evenly my-6">
        <button
          className="py-3 px-8 border-2 border-primary rounded-full"
          onClick={() => setActiveTimeline("primary")}
        >
          Line1
        </button>
        <button
          className="py-3 px-8 border-2 border-secondary rounded-full"
          onClick={() => setActiveTimeline("secondnary")}
        >
          Line2
        </button>
      </div>
      <div className="md:hidden w-full">
        {activeTimeline === "primary" && (
          <Timeline schedule={timelineData} variant="primary" />
        )}
        {activeTimeline === "secondnary" && (
          <Timeline schedule={[]} variant="secondary" />
        )}
      </div>
      <div className="hidden md:flex w-full">
        <Timeline schedule={timelineData} variant="primary" />
        <Timeline schedule={[]} variant="secondary" />
      </div>
    </section>
  );
}
