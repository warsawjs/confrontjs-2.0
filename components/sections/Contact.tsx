import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex bg-white mx-10 lg:mx-64 py-10 bg-opacity-60 rounded-3xl shadow-2xl shadow-primary">
      <div className="flex flex-col gap-10 text-left px-10 text-black">
        <h1 className="w-72 lg:w-[740px] font-bold text-xl lg:text-4xl uppercase">
          contact
        </h1>
        <p className="text-sm lg:text-base">
          If you have any questions, write email to us:{" "}
          <Link
            className="pl-2 font-bold hover:text-primary underline"
            href="mailto:contact@warsawjs.com?subject=custom subject"
          >
            contact@warsawjs.com
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
