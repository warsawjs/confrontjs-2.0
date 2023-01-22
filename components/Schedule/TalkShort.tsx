export function TalkShort({ children = '' }) {
  return (<div className="lg:max-w-[800px]">
    <a>Talk-title</a>
    <div>
      {children}
    </div>
  </div>)
}
