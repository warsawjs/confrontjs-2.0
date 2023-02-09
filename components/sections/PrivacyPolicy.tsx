import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="flex bg-white mx-10 lg:mx-64 py-10 bg-opacity-60 rounded-3xl shadow-2xl shadow-primary">
      <div className="flex flex-col gap-10 text-left px-10 text-black">
        <h1 className="w-72 lg:w-[740px] font-bold text-xl lg:text-4xl uppercase">
          PRIVACY POLICY
        </h1>
        <p className="text-sm lg:text-base">
          This privacy policy will explain how WarsawJS sp. z o.o., (later
          WarsawJS) uses the personal data we collect from you when you use our
          website.
        </p>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl uppercase">Topics:</h2>
          <ul className="pl-5 list-disc marker:text-primary">
            <li>What data do we collect?</li>
            <li>How do we collect your data?</li>
            <li>How will we use your data?</li>
            <li>How do we store your data?</li>
            <li>Marketing</li>
            <li>What are your data protection rights?</li>
            <li>What are cookies?</li>
            <li>How do we use cookies?</li>
            <li>What types of cookies do we use?</li>
            <li>How to manage your cookies</li>
            <li>Privacy policies of other websites</li>
            <li>Changes to our privacy policy</li>
            <li>How to contact us</li>
            <li>How to contact the appropriate authorities</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl lg:text-2xl">
            WHAT DATA DO WE COLLECT?
          </h2>
          <p className="text-sm lg:text-base">
            Our Company collects the following data:
          </p>
          <ul className="pl-5 list-disc marker:text-primary">
            <li>
              Personal identification information (Name, email address, phone
              number, etc.) via the contact form
            </li>
            <li>Google Analytics data</li>
            <li>Company data for invoicing</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl  lg:text-2xl">
            HOW DO WE COLLECT YOUR DATA?
          </h2>
          <p className="text-sm lg:text-base">
            You directly provide Our Company with most of the data we collect.
            We collect data and process data when you:
          </p>
          <ul className="pl-5 list-disc marker:text-primary">
            <li>Voluntarily complete the contact form</li>
            <li>Use or view our website via your browser’s cookies</li>
            <li>
              Buy the ticket via{" "}
              <Link
                className="font-bold hover:text-primary underline"
                href="https://www.easycart.pl/"
              >
                easycart.pl
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl  lg:text-2xl">
            HOW WILL WE USE YOUR DATA?
          </h2>
          <p className="text-sm lg:text-base">
            Our Company collects your data so that we can:
          </p>
          <ul className="pl-5 list-disc marker:text-primary">
            <li>
              If you opt in to the newsletter, we email you with special offers
              on other products and services we think you might like
            </li>
            <li>Answer your contact form submission</li>
            <li>Learn about the traffic on our website</li>
            <li>Issue invoices for the tickets you buy</li>
            <li>Use your name and surname from the ticket to print a badge</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl lg:text-2xl">
            HOW DO WE STORE YOUR DATA?
          </h2>
          <p className="text-sm lg:text-base">
            Our Company securely stores your data. Your personal data is also
            processed by{" "}
            <Link
              className="font-bold hover:text-primary underline"
              href="https://www.easycart.pl/"
            >
              easycart.pl
            </Link>{" "}
            when you purchase the ticket. Our Company will keep your personal
            data for 10 years. Once this time period has expired, we will delete
            your data by erasing the records from our database and emails.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl lg:text-2xl">MARKETING</h2>
          <p className="text-sm lg:text-base">
            Our Company would like to send you information about services of
            ours that we think you might like. We also share your data with our
            diamond sponsor, Monday.com. If you have agreed to receive
            marketing, you may always opt out at a later date. You have the
            right at any time to stop WarsawJS from contacting you for marketing
            purposes. If you no longer wish to be contacted for marketing
            purposes, please email us at:
            <Link
              className="pl-2 font-bold hover:text-primary underline"
              href="mailto:contact@warsawjs.com?subject=custom subject"
            >
              contact@warsawjs.com
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl lg:text-2xl">
            WHAT ARE YOUR DATA PROTECTION RIGHTS?
          </h2>
          <p className="text-sm lg:text-base">
            Our Company would like to make sure you are fully aware of all of
            your data protection rights. Every user is entitled to the
            following:
          </p>
          <ul className="pl-5 flex flex-col gap-2 list-disc marker:text-primary text-sm lg:text-base">
            <li>
              <span className="font-bold text-primary">
                The right to access
              </span>{" "}
              – You have the right to request WarsawJS for copies of your
              personal data. We may charge you a small fee for this service.
            </li>
            <li>
              <span className="font-bold text-primary">
                The right to rectification
              </span>{" "}
              – You have the right to request that WarsawJS correct any
              information you believe is inaccurate. You also have the right to
              request WarsawJS to complete the information you believe is
              incomplete.
            </li>
            <li>
              <span className="font-bold text-primary">
                The right to erasure
              </span>{" "}
              – You have the right to request that WarsawJS erase your personal
              data, under certain conditions.
            </li>
            <li>
              <span className="font-bold text-primary">
                The right to restrict processing
              </span>{" "}
              – You have the right to request that WarsawJS restrict the
              processing of your personal data, under certain conditions.
            </li>
            <li>
              <span className="font-bold text-primary">
                The right to object to processing
              </span>{" "}
              – You have the right to object to WarsawJS’s processing of your
              personal data, under certain conditions.
            </li>
            <li>
              <span className="font-bold text-primary">
                The right to data portability
              </span>{" "}
              – You have the right to request that WarsawJS transfer the data
              that we have collected to another organization, or directly to
              you, under certain conditions.
            </li>
          </ul>
          <p className="text-sm lg:text-base">
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us at our
            email:
            <Link
              className="pl-2 font-bold hover:text-primary underline"
              href="mailto:contact@warsawjs.com?subject=custom subject"
            >
              contact@warsawjs.com
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl lg:text-2xl">COOKIES</h2>
          <p className="text-sm lg:text-base">
            Cookies are text files placed on your computer to collect standard
            Internet log information and visitor behavior information. When you
            visit our websites, we may collect information from you
            automatically through cookies or similar technology For further
            information, visit:
            <Link
              className="pl-2 font-bold hover:text-primary underline"
              href="https://allaboutcookies.org/"
            >
              allaboutcookies.org
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl lg:text-2xl">
            WHAT TYPES OF COOKIES DO WE USE?
          </h2>
          <p className="text-sm lg:text-base">
            There are a number of different types of cookies, however, our
            website uses:
          </p>
          <ul className="pl-5 list-disc marker:text-primary">
            <li>
              Functionality – WarsawJS uses these cookies so that we recognize
              you on our website and remember your previously selected
              preferences. These could include what language you prefer and
              location you are in. A mix of first-party and thirdparty cookies
              are used.
            </li>
            <li>
              Advertising – WarsawJS uses these cookies to collect information
              about your visit to our website, the content you viewed, the links
              you followed and information about your browser, device, and your
              IP address. WarsawJS sometimes shares some limited aspects of this
              data with third parties for advertising purposes. We may also
              share online data collected through cookies with our advertising
              partners. This means that when you visit another website, you may
              be shown advertising based on your browsing patterns on our
              website.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl lg:text-2xl">
            HOW TO MANAGE COOKIES
          </h2>
          <p className="text-sm lg:text-base">
            You can set your browser not to accept cookies, and the above
            website tells you how to remove cookies from your browser. However,
            in a few cases, some of our website features may not function as a
            result.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl lg:text-2xl">
            PRIVACY POLICIES OF OTHER WEBSITES
          </h2>
          <p className="text-sm lg:text-base">
            The Our Company website contains links to other websites. Our
            privacy policy applies only to our website, so if you click on a
            link to another website, you should read their privacy policy.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl lg:text-2xl">
            CHANGES TO OUR PRIVACY POLICY
          </h2>
          <p className="text-sm lg:text-base">
            WarsawJS keeps its privacy policy under regular review and places
            any updates on this web page. This privacy policy was last updated
            on 31 October 2019.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl lg:text-2xl">HOW TO CONTACT US</h2>
          <p className="text-sm lg:text-base">
            If you have any questions about WarsawJS’s privacy policy, the data
            we hold on you, or you would like to exercise one of your data
            protection rights, please do not hesitate to contact us. Email us
            at:
            <Link
              className="pl-2 font-bold hover:text-primary underline"
              href="mailto:contact@warsawjs.com?subject=custom subject"
            >
              contact@warsawjs.com
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl lg:text-2xl">
            HOW TO CONTACT THE APPROPRIATE AUTHORITY
          </h2>
          <p className="text-sm lg:text-base">
            Should you wish to report a complaint or if you feel that Our
            Company has not addressed your concern in a satisfactory manner, you
            may contact the Information Commissioner’s Office. Email:
            <Link
              className="pl-2 font-bold hover:text-primary underline"
              href="mailto:contact@warsawjs.com?subject=custom subject"
            >
              contact@warsawjs.com
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl lg:text-2xl">Address:</h2>
          <h2 className="font-semibold text-base">
            WARSAWJS SP. Z O.O. UL. WAŁ MIEDZESZYŃSKI 420/23 03-994 WARSZAWA
            NIP: 9522185629 REGON: 381052875
          </h2>
        </div>
      </div>
    </div>
  );
}
