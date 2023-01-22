import { Line } from "@/components/Schedule/Line";
import { TalkShort } from "@/components/Schedule/TalkShort";

export function Schedule({ children = undefined }) {

  const defaultContent = (<>
    <Line>
      <TalkShort/>
      <TalkShort/>
      <TalkShort/>
      <TalkShort/>
      <TalkShort/>
    </Line>
    <Line>
      <TalkShort/>
      <TalkShort/>
      <TalkShort/>
      <TalkShort/>
      <TalkShort/>
    </Line>
    </>)

  return (<div>
    <h2>Schedule</h2>
    <div className="flex">
      {children || defaultContent}
    </div>
  </div>)
}
