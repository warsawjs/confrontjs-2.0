import { Layout } from "@/components/layout/Layout";
import Line from "@/components/Schedule/Line";
import TalkShort from "@/components/Schedule/TalkShort";
import { Schedule, Speakers, Venue, Why } from "@/components/sections";


export default function () {
  return (
  <>
    <Why/>
    <Speakers/>
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
    <Venue/>
  </>
  )
}
