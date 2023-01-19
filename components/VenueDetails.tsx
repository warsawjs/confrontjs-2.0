export type VenueDetailsProps = {
  [key: string]: any;
}

export default function VenueDetails({ name, img, desc, left, right }: VenueDetailsProps): JSX.Element {
  return (<>
    <h3>Venue {name}</h3>
    <div style={{display: 'flex', ...right ? {order: 'revert'} : {}}}>
      <img src={img} alt={name} />
      <div>
        {desc}
      </div>
    </div>
  </>)
}
