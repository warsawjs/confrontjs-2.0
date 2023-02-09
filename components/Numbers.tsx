type Props = { color: string; info: any };
/* to make the component reusable and changing style quickly */
const secondary = "#17E9E0";
const primary = "#A64AC9";
export function Numbers({ color, info }: Props) {
  return (
    <>
      <div className="flex flex-col py-40 items-center text-center gap-6 text-xs lg:text-sm">
        <div className={`${color === secondary ? "flex" : "hidden"}`}>
          <h1 className="font-bold text-xl lg:text-4xl uppercase">
            WHY CONFRONTJS?
          </h1>
        </div>
        <div className="flex flex-row justify-center gap-2 lg:gap-24">
          <div className="flex flex-col items-center">
            <h1
              style={{ color: color }}
              className="font-bold text-5xl lg:text-[128px]"
            >
              {info.days}
            </h1>
            <h2 className="pb-2 lg:pb-4 font-bold text-lg lg:text-3xl text-black uppercase">
              {"Day" + (info.days > 1 ? "s" : "")}
            </h2>
            <hr
              style={{
                width: "100%",
                height: "2px",
                color: color,
                background: color,
              }}
            />
          </div>
          <div className="flex flex-col items-center">
            <h1
              style={{ color: color }}
              className="font-bold text-5xl lg:text-[128px]"
            >
              {info.lines}
            </h1>
            <h2 className="pb-2 lg:pb-4 font-bold text-lg lg:text-3xl text-black">
              {"Line" + (info.lines > 1 ? "s" : "")}
            </h2>
            <hr
              style={{
                width: "100%",
                height: "2px",
                color: color,
                background: color,
              }}
            />
          </div>
          <div className="flex flex-col items-center">
            <h1
              style={{ color: color }}
              className="font-bold text-5xl lg:text-[128px]"
            >
              {info.speakers}
            </h1>
            <h2 className="pb-2 lg:pb-4 font-bold text-lg lg:text-3xl text-black">
              {"Speakers" + (info.lines > 1 ? "s" : "")}
            </h2>
            <hr
              style={{
                width: "100%",
                height: "2px",
                color: color,
                background: color,
              }}
            />
          </div>
          <div className="flex flex-col items-center">
            <h1
              style={{ color: color }}
              className="font-bold text-5xl lg:text-[128px]"
            >
              {info.lang}
            </h1>
            <h2 className="pb-2 lg:pb-4 font-bold text-lg lg:text-3xl text-black">
              Language
            </h2>
            <hr
              style={{
                width: "100%",
                height: "2px",
                color: color,
                background: color,
              }}
            />
          </div>
        </div>
        <p className="w-[308px] lg:w-[950px]">{info.desc}</p>
      </div>
    </>
  );
}
