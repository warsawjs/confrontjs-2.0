import SpeakerShort from "../Schedule/SpeakerShort";
import TimeCounter from "../Numbers";
import VenueDetails from "../VenueDetails";

export function Why() {
  return (<>
    <h2>Why</h2>
    <TimeCounter deadline="Mar 24, 2022 14:00 Europe/Warsaw"/>
    <div>
      <p>[Reasoning why...]</p>
    </div>
  </>)
}

export function Speakers({ speakers = [{id: '', name: ''}].slice(0) }) {
  speakers = /* TODO speakers || */ `
    speaker1, jan kowalski
    speaker2, mick jagger
    speaker3, lenny kilmister
    speaker4, evan you
  `
  .split('\n')
  .filter(e => Boolean(e.trim()))
  .map(function lineToSpeakerObject(e) {
    const vals = e.split(',');
    const entries = 'id,name'.split(',').map((f, id) => [f, vals[id]])
    return Object.fromEntries(entries)
  })
  return (<>
    <h2>Speakers</h2>
    <div>
      <ul>
        {speakers.map(e => (
          <li>
            <SpeakerShort>{e.id}: {e.name}</SpeakerShort>
          </li>
        ))}
      </ul>
    </div>
  </>)
}

export function Schedule({ children = [<></>] }) {
  return (<div>
    <h2>Schedule</h2>
    <div style={{display: 'flex'}}>
      {children}
    </div>
  </div>)
}

export function Organizers() {
  return (<>
    <h2>Organizers</h2>
  </>)
}

export function Venue() {
  return (<>
    <section>
      <h2>Venue</h2>
      <div>
        <VenueDetails left name="PKiN"/>
      </div>
    </section>
  </>)
}
