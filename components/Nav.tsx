import Link from "next/link";

export function Nav() {
  return (<nav className="menu flex justify-around">
    <Link href={"/main-page"}><img alt="Logo"/></Link>
    {`
    Why ConfrontJS
    Speakers
    Schedule
    Venue
    -Become a sponsor
    -Call for papers
    `.split('\n').map(e => e.trim()).filter(Boolean).map((text, i) => {
      return <Link
        key={`nav-${i}`}
        className="hover:underline"
        href={text.startsWith('-') ? '' : `/${text.toLocaleLowerCase().trim().replace(/\s+/g, '-')}`}
      >{text.replace(/^-/, '')}</Link>
    })}
    <a className="uppercase" href={"//easycart.pl"}>Buy ticket</a>
  </nav>)
}

export default Nav;
