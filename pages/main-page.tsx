import { Schedule } from "@/components/sections/Schedule";
import { Speakers } from "@/components/sections/Speakers";
import { Venue } from "@/components/sections/Venue";
import { Why } from "@/components/sections/Why";

export function MainPage() {
  return (<>
    <Why/>
    <Speakers/>
    <Schedule/>
    <Venue/>
  </>)
}

export default MainPage;
