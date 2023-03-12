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
      <div className="flex flex-col items-center justify-center gap-10 text-xs lg:text-sm pt-20 pb-40">
        <h1 className="font-bold text-xl text-black lg:text-4xl pb-10">
          Supporting team
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
          {staff.map((stf: any) => {
            return (
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-24 lg:w-56 h-24 lg:h-56 rounded-3xl overflow-hidden drop-shadow-xl">
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
                  <h2 className="font-bold text-sm lg:text-xl">{stf.name}</h2>
                  <p>{stf.title}</p>
                </div>
                {/* <p className="w-56 lg:w-64"></p> */}
                <div className="text-4xl text-black flex justify-center gap-2 py-2">
                  {stf.linkedin !== "" ? (
                    <Link
                      target="_blank"
                      rel="noopener"
                      className="hover:text-secondary transition-all duration-300 ease-in-out"
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
                      className="hover:text-secondary transition-all duration-300 ease-in-out"
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
                      className="hover:text-secondary transition-all duration-300 ease-in-out"
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
                      className="hover:text-secondary transition-all duration-300 ease-in-out"
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
