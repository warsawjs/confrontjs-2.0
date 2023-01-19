import Line from "@/components/Schedule/Line";
import TalkShort from "@/components/Schedule/TalkShort";
import { Schedule } from "@/components/sections";

export default function () {
  return <>
    <Schedule>
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
    </Schedule>
  </>
}
