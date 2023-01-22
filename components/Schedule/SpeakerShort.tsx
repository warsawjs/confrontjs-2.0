import Link from "next/link"
import { SpeakerDetails } from "./SpeakerDetails"

export function SpeakerShort({ children }: any) {
  return (<div className="m-2 border-2 lg:max-w-[400px]">
    <Link href={"/speaker/evan-you"}>open page</Link>
    <small onClick={ev => {/* TODO change implementation */ (ev.target as any).nextElementSibling.showModal()}}>Speaker details</small>
    <dialog onSubmit={() => {}}>
      [Speaker details here]
      <SpeakerDetails/>
      <form method="dialog">
        <button type="submit">Close</button>
      </form>
    </dialog>
    <div>
      {children}
    </div>
  </div>)
}
