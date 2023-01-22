import { SpeakerShort } from "../Schedule/SpeakerShort";

export function Speakers({ speakers = [{id: '', name: ''}].slice(0) }) {
  speakers = /* TODO loading speakers from some kind of API || */ `
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
