import React from "react";
import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import Image from "next/image";

export function Organizers() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 text-xs lg:text-sm py-40">
        <h1 className="font-bold text-xl text-white lg:text-4xl pb-10">
          ORGANIZERS
        </h1>
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-36 lg:w-72 h-36 lg:h-72 rounded-3xl overflow-hidden drop-shadow-xl">
              <Image
                className="w-full h-full"
                width={1000}
                height={1000}
                src="https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/people/piotr-zientara.png"
                alt="avatar"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-sm text-white lg:text-xl">
                Piotr Zientara
              </h2>
              <p>Organizer</p>
            </div>
            <p className="w-56 lg:w-64">
              Community leader. Game changer. Superconnector. CEO @ Xfaang. Once
              stung by socrates, philosophizes ever since. Knowing is doing.
            </p>
            <div className="text-4xl text-black flex justify-center gap-2 py-2">
              <Link
                target="_blank"
                rel="noopener"
                className="hover:text-secondary transition-all duration-300 ease-in-out"
                href="https://www.linkedin.com/in/piotr-zientara/"
              >
                {<AiFillLinkedin />}
              </Link>
              <Link
                target="_blank"
                rel="noopener"
                className="hover:text-secondary transition-all duration-300 ease-in-out"
                href="https://twitter.com/piotr_zientara"
              >
                {<AiFillTwitterCircle />}
              </Link>
              <Link
                target="_blank"
                rel="noopener"
                className="hover:text-secondary transition-all duration-300 ease-in-out"
                href="https://www.instagram.com/piotr_zientara/"
              >
                {<AiFillInstagram />}
              </Link>
              <Link
                target="_blank"
                rel="noopener"
                className="hover:text-secondary transition-all duration-300 ease-in-out"
                href="https://www.facebook.com/ylgiusz"
              >
                {<AiFillFacebook />}
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-36 lg:w-72 h-36 lg:h-72 rounded-3xl overflow-hidden drop-shadow-xl">
              <Image
                className="w-full h-full"
                width={1000}
                height={1000}
                src="https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/people/aleksandra-michalowska.jpg"
                alt="avatar"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-sm text-white lg:text-xl">
                Aleksandra Michałowska
              </h2>
              <p>Organizer</p>
            </div>
            <p className="w-56 lg:w-64">
              Head of Operations, creator of the safe space.
              No victor believes in chance.
            </p>
            <div className="text-4xl text-black flex justify-center gap-2 py-2">
              <Link
                target="_blank"
                rel="noopener"
                className="hover:text-secondary transition-all duration-300 ease-in-out"
                href="https://www.linkedin.com/in/sasha-rust/"
              >
                {<AiFillLinkedin />}
              </Link>
              {/* <Link
                className="hover:text-secondary transition-all duration-300 ease-in-out"
                href="https://twitter.com/confrontjs"
              >
                {<AiFillTwitterCircle />}
              </Link>
              <Link
                className="hover:text-secondary transition-all duration-300 ease-in-out"
                href="https://www.instagram.com/confrontjs.event"
              >
                {<AiFillInstagram />}
              </Link>
              <Link
                className="hover:text-secondary transition-all duration-300 ease-in-out"
                href="https://www.facebook.com/confrontjs"
              >
                {<AiFillFacebook />}
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
