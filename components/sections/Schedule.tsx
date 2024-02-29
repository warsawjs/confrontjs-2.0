import { useState } from "react";
import { Line } from "../Schedule/Line";
import { Link } from "../Link";

import type { ScheduleProps } from "@/pages/schedule";
import type { LineVariant } from "@/components/Schedule/types";

export function Schedule({ tracksData }: ScheduleProps) {
  const [activeTimeline, setActiveTimeline] = useState<LineVariant>("one");
  const { trackOne, trackTwo } = tracksData;

return (
  <section className="container gap-5 px-6 mx-auto md:flex">
    {/* <div className="flex my-6 md:hidden justify-evenly">
        <button
          className="px-8 py-3 border-2 rounded-full border-primary"
          onClick={() => setActiveTimeline("one")}
        >
          Line1
        </button>
        <button
          className="px-8 py-3 border-2 rounded-full border-secondary"
          onClick={() => setActiveTimeline("two")}
        >
          Line2
        </button>
      </div> */}
    <div className="mx-auto">
      <div className="w-full md:hidden">
        {activeTimeline === "one" && <Line {...trackOne} lineVariant="one" />}
        {/* {activeTimeline === "two" && <Line {...trackTwo} lineVariant="two" />} */}
      </div>
      <div className="hidden w-full max-w-5xl mx-auto md:flex md:gap-24">
        <Line {...trackOne} lineVariant="one" />
        {/* <Line {...trackTwo} lineVariant="two" /> */}
      </div>
      <div className="flex justify-center my-20 md:my-12">
        <Link variant="tertiary" href="/buy-a-ticket">
          buy a ticket
        </Link>
      </div>
    </div>
  </section>
);
}
