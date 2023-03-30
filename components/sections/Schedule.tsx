import { useState } from "react";
import { Line } from "../Schedule/Line";
import { Link } from "../Link";
import type { LineVariant } from "@/components/Schedule/types";

export function Schedule({ tracksData }: any) {
  const [activeTimeline, setActiveTimeline] = useState<LineVariant>("one");
  const { trackOne, trackTwo } = tracksData;

  return (
    <section className="container mx-auto md:flex gap-5 px-6">
      {/* <div className="md:hidden flex justify-evenly my-6">
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
      </div> */}
      <div className="mx-auto">
        <div className="md:hidden w-full">
          {activeTimeline === "one" && <Line {...trackOne} lineVariant="one" />}
          {/* {activeTimeline === "two" && <Line {...trackTwo} lineVariant="two" />} */}
        </div>
        <div className="hidden md:flex md:gap-24 w-full max-w-5xl mx-auto">
          <Line {...trackOne} lineVariant="one" />
          {/* <Line {...trackTwo} lineVariant="two" /> */}
        </div>
        <div className="my-20 md:my-12 flex justify-center">
          <Link variant="tertiary" href="/buy-a-ticket">
            buy a ticket
          </Link>
        </div>
      </div>
    </section>
  );
}
