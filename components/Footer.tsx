import Link from "next/link";
import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import WJSLogo from "../public/WJSLogo.png";

export default function Footer() {
  return (
    <div className="flex flex-col justify-around text-xs text-white lg:flex-row bg-tertiary lg:text-sm">
      <div className="h-[350px] flex flex-col items-center justify-around py-20 text-center">
        <p>
          Help us to reach
          <br />a wider group of people,
          <br />
          get a ready package
          <br />
          that will make it easier for you:
        </p>
        <Link
          href="https://drive.google.com/drive/folders/1fxIe9BftuFlWGIaAQU5Hho_XVLV2iRva"
          className="px-6 py-4 text-sm font-bold uppercase transition-all duration-300 ease-in-out border-2 rounded-xl hover:bg-secondary hover:text-black"
        >
          DOWNLOAD PRESS KIT
        </Link>
      </div>

      <div className="flex flex-col items-center justify-around text-center lg:py-20">
        <div>
          <h1 className="text-xl font-bold uppercase lg:text-3xl">CONTACT</h1>
          <p>
            If you have any questions,
            <br />
            write email to us:
          </p>
          <Link
            className="underline uppercase underline-offset-4"
            href="mailto:confrontjs@warsawjs.com?subject=custom subject"
          >
            CONFRONTJS@WARSAWJS.COM
          </Link>
          <div className="flex justify-center gap-4 py-6 text-4xl text-primary">
            <Link
              className="transition-all duration-300 ease-in-out hover:text-secondary"
              href="https://twitter.com/confrontjs"
            >
              {<AiFillTwitterCircle />}
            </Link>
            <Link
              className="transition-all duration-300 ease-in-out hover:text-secondary"
              href="https://www.instagram.com/confrontjs.event"
            >
              {<AiFillInstagram />}
            </Link>
            <Link
              className="transition-all duration-300 ease-in-out hover:text-secondary"
              href="https://www.facebook.com/confrontjs"
            >
              {<AiFillFacebook />}
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <p>
            Copyright @ 2024 by:{" "}
            <Link
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://warsawjs.com/"
            >
              WarsawJS
            </Link>
          </p>

          <div className="flex flex-row gap-2 py-2">
            <Link
              className="underline underline-offset-4"
              href="/why-confrontjs"
            >
              About us
            </Link>
            <Link className="underline underline-offset-4" href="/contact">
              Contact
            </Link>
          </div>

          <div className="flex flex-row gap-2 py-2">
            <Link
              className="underline underline-offset-4"
              href="https://berlincodeofconduct.org/"
            >
              Code of Conduct
            </Link>
            <Link className="underline underline-offset-4" href="/color-codes">
              Color Codes
            </Link>
          </div>
          <div className="flex flex-row gap-2 py-2">
            <Link
              className="underline underline-offset-4"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="underline underline-offset-4"
              href="/terms-and-conditions"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-around py-20 text-center">
        <h1 className="text-xl font-bold lg:text-3xl">Powered by:</h1>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://warsawjs.com/"
        >
          <Image width={145} height={145} src={WJSLogo} alt="warsawJS logo" />
        </Link>
      </div>
    </div>
  );
}
