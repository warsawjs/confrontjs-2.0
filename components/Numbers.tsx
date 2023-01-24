type Props = { color: string };
/* to make the component reusable and changing style quickly */
const secondary = "#17E9E0";
const primary = "#A64AC9";
export function Numbers({ color }: Props) {
  return (
    <>
      <div className="flex flex-col py-40 items-center text-center gap-6 text-xs lg:text-sm">
        <div className={`${color === secondary ? "flex" : "hidden"}`}>
          <h1 className="font-bold text-xl lg:text-4xl">WHY CONFRONTJS?</h1>
        </div>
        <div className="w-[100vw] flex flex-row justify-center gap-2 lg:gap-24">
          <div className="flex flex-col items-center">
            <h1
              style={{ color: color }}
              className="font-bold text-5xl lg:text-[128px]"
            >
              1
            </h1>
            <h2 className="pb-2 lg:pb-4 font-bold text-lg lg:text-3xl text-black">
              DAY
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
              2
            </h1>
            <h2 className="pb-2 lg:pb-4 font-bold text-lg lg:text-3xl text-black">
              LINES
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
              25
            </h1>
            <h2 className="pb-2 lg:pb-4 font-bold text-lg lg:text-3xl text-black">
              SPEAKERS
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
              ENG
            </h1>
            <h2 className="pb-2 lg:pb-4 font-bold text-lg lg:text-3xl text-black">
              LANGUAGE
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

        <p className="w-[308px] lg:w-[950px]">
          At ConfrontJS we aim to bring together industry leaders, developers,
          and enthusiasts to share their knowledge and experience in the latest
          front-end technologies and trends. This year's event will feature
          keynote speeches, workshops, and sessions focused on topics such as
          JavaScript frameworks, web design, and user experience. Whether you're
          a seasoned veteran or a newcomer to the field, there's something for
          everyone at this conference. Let's learn, grow and connect together.
          So get ready to immerse yourself in a world of front-end development
          and take your skills to the next level.
        </p>
      </div>
    </>
  );
}
