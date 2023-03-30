import React from "react";
import Image from "next/image";
import Link from "next/link";
type Info = {
  [key: string]: {
    value: string;
  };
};

type Props = {
  info: Info;
};

export default function Partners({ info }: Info) {
  const infoArray = Object.entries(info).filter(([key, value]) =>
    key.includes("*")
  );
  return (
    <div className="flex flex-col items-center justify-center py-40 pt-20 lg:px-40">
      <div className="flex flex-row justify-center text-center">
        <h2 className="font-bold text-xl text-black lg:text-4xl uppercase">
          partners
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 items-center justify-center gap-20 pt-40">
        {infoArray.map(([key, value]) => {
          return (
            <div className="w-50 h-30 flex items-center justify-center rounded-lg opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden">
              <Link href={value} target="_blank" rel="noopener noreferrer">
                <Image
                  src={`https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/partners/${key.slice(
                    0,
                    -1
                  )}.png`}
                  width={150}
                  height={150}
                  className=""
                  alt="partner avatar"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
