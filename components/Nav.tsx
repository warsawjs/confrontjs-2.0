import Link from "next/link";

export default function () {
  return (<div className="menu">
    <Link href={"/main-page"}><img alt="Logo"/></Link>
    {`
    Why ConfrontJS
    Speakers
    Schedule
    Venue
    Become a sponsor
    Call for papers
    `.split('\n').filter(e => Boolean(e.trim())).map(e =>
      <Link href={`/${e.toLocaleLowerCase().trim().replace(/\s+/g, '-')}`}>{e}</Link>
    )}
    <Link className="uppercase" href={"/easycart.pl"}>Buy ticket</Link>
  </div>)
}
