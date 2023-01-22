export function Line({ children = [<></>] }) {
  return (<div className="lg:max-w-[800px]" style={{border: '1px dotted black'}}>
    <h2>Line</h2>
    <div>
      {children}
    </div>
  </div>)
}
