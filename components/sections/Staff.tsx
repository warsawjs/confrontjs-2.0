import React from "react";
import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import Image from "next/image";

export function Staff({ staff }: any) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 pt-20 pb-40 text-xs lg:text-sm">
        <h1 className="pb-10 text-xl font-bold text-black lg:text-4xl">
          Supporting team
        </h1>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-3">
          {staff.map((stf: any, i: number) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="w-24 h-24 overflow-hidden lg:w-56 lg:h-56 rounded-3xl drop-shadow-xl">
                  <Image
                    className="w-full h-full"
                    width={1000}
                    height={1000}
                    src={stf.picture}
                    // src={`https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/people/${stf.name
                    //   .toLowerCase()
                    //   .replace(/\s+/g, "-")}.jpg`}
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm font-bold lg:text-xl">{stf.name}</h2>
                  <p>{stf.title}</p>
                </div>
                {/* <p className="w-56 lg:w-64"></p> */}
                <div className="flex justify-center gap-2 py-2 text-4xl text-black">
                  {stf.linkedin !== "" ? (
                    <Link
                      target="_blank"
                      rel="noopener"
                      className="transition-all duration-300 ease-in-out hover:text-secondary"
                      href={stf.linkedin}
                    >
                      {<AiFillLinkedin />}
                    </Link>
                  ) : (
                    ""
                  )}
                  {stf.twitter !== "" ? (
                    <Link
                      target="_blank"
                      rel="noopener"
                      className="transition-all duration-300 ease-in-out hover:text-secondary"
                      href={stf.twitter}
                    >
                      {<AiFillTwitterCircle />}
                    </Link>
                  ) : (
                    ""
                  )}
                  {stf.instagram !== "" ? (
                    <Link
                      target="_blank"
                      rel="noopener"
                      className="transition-all duration-300 ease-in-out hover:text-secondary"
                      href={stf.instagram}
                    >
                      {<AiFillInstagram />}
                    </Link>
                  ) : (
                    ""
                  )}
                  {stf.facebook !== "" ? (
                    <Link
                      target="_blank"
                      rel="noopener"
                      className="transition-all duration-300 ease-in-out hover:text-secondary"
                      href={stf.facebook}
                    >
                      {<AiFillFacebook />}
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
