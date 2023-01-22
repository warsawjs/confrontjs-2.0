import Link from "next/link";
import Image from "next/image";
import { AiFillTwitterCircle, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import WJSLogo from '../public/WJSLogo.png';

export default function () {
  // .col-4*3
  return (
    <div className="flex flex-col lg:flex-row bg-tertiary text-white text-xs lg:text-sm">

      <div className="h-[350px] flex flex-col items-center justify-around py-20 text-center">
        <p>Help us to reach<br/>a wider group of people,
        <br/>get a ready package<br/>that will make it easier for you:</p>
        <Link
          href=""
          className="text-sm px-6 py-4 rounded-xl border-2 font-bold"
        >
          DOWNLOAD PRESS KIT</Link>
      </div>

      <div className="flex flex-col items-center justify-around lg:py-20 text-center">
        <div>
          <h1 className="font-bold text-xl lg:text-3xl">CONTACT</h1>
          <p>If you have any questions,<br/>write email to us:</p>
          <Link 
            className="underline underline-offset-4"
            href="mailto:confrontjs@warsawjs.com?subject=custom subject">
              CONFRONTJS@WARSAWJS.COM
          </Link>
          <div className="text-4xl text-primary flex justify-center gap-4 py-6">
            <Link href="https://twitter.com/confrontjs">{<AiFillTwitterCircle/>}</Link>
            <Link href="https://www.instagram.com/confrontjs.event">{<AiFillInstagram/>}</Link>
            <Link href="https://www.facebook.com/confrontjs">{<AiFillFacebook/>}</Link>
          </div>
        </div>
        <div className="flex flex-col text-center items-center">
          <p>Copyright @ 2023 by: <Link className="underline"  href="">WarsawJS</Link></p>
          
          <div className="flex flex-row gap-2 py-2">
            
            
            <Link className="underline underline-offset-4"  href="">About us</Link>
            <Link className="underline underline-offset-4"  href="">Contact</Link>
          </div>
        
          <div className="flex flex-row gap-2 py-2">
            <Link className="underline underline-offset-4"  href="">Code of Conduct</Link>
            <Link className="underline underline-offset-4"  href="">Color Codes</Link>
            
          </div>
          <div className="flex flex-row gap-2 py-2">
            <Link className="underline underline-offset-4"  href="">Privacy Policy</Link>
            <Link className="underline underline-offset-4"  href="">Terms and Conditions</Link>
          </div>
        
        </div>
      </div>

      <div className="flex flex-col items-center justify-around py-20 text-center">
        <h1 className="font-bold text-xl lg:text-3xl">Powered by:</h1>
        <Image src={WJSLogo} alt="warsawJS logo"/>
      </div>
    </div>
  )
}
