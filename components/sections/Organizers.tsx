import React from "react";
import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

export function Organizers() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 text-xs lg:text-sm">
        <h1 className="font-bold text-xl lg:text-4xl">ORGANIZERS</h1>
        <div className="flex flex-col lg:flex-row justify-center gap-10">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-36 lg:w-72 h-36 lg:h-72 rounded-3xl bg-tertiary"></div>
            <div className="flex flex-col">
              <h2 className="font-bold text-sm text-primary lg:text-xl">Opening Keynote</h2>
              <p>by Chris Lilley </p>
            </div>
            <p className="w-56 lg:w-64">
              d web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites
              still in
            </p>
            <div className="text-4xl text-secondary flex justify-center gap-2 py-2">
              <Link href="https://twitter.com/confrontjs">
                {<AiFillTwitterCircle />}
              </Link>
              <Link href="https://www.instagram.com/confrontjs.event">
                {<AiFillInstagram />}
              </Link>
              <Link href="https://www.facebook.com/confrontjs">
                {<AiFillFacebook />}
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-36 lg:w-72 h-36 lg:h-72 rounded-3xl bg-tertiary"></div>
            <div className="flex flex-col">
              <h2 className="font-bold text-sm text-primary lg:text-xl">Opening Keynote</h2>
              <p>by Chris Lilley </p>
            </div>
            <p className="w-56 lg:w-64">
              d web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites
              still in
            </p>
            <div className="text-4xl text-secondary flex justify-center gap-2 py-2">
              <Link href="https://twitter.com/confrontjs">
                {<AiFillTwitterCircle />}
              </Link>
              <Link href="https://www.instagram.com/confrontjs.event">
                {<AiFillInstagram />}
              </Link>
              <Link href="https://www.facebook.com/confrontjs">
                {<AiFillFacebook />}
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-36 lg:w-72 h-36 lg:h-72 rounded-3xl bg-tertiary"></div>
            <div className="flex flex-col">
              <h2 className="font-bold text-sm text-primary lg:text-xl">Opening Keynote</h2>
              <p>by Chris Lilley </p>
            </div>
            <p className="w-56 lg:w-64">
              d web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites
              still in
            </p>
            <div className="text-4xl text-secondary flex justify-center gap-2 py-2">
              <Link href="https://twitter.com/confrontjs">
                {<AiFillTwitterCircle />}
              </Link>
              <Link href="https://www.instagram.com/confrontjs.event">
                {<AiFillInstagram />}
              </Link>
              <Link href="https://www.facebook.com/confrontjs">
                {<AiFillFacebook />}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
