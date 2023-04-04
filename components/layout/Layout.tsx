import Nav from "../Nav";
import Footer from "../Footer";
import React, { useState } from "react";
import GoogleAnalytics from "../../google-analytics";
import CookieConsent from "../../components/CookieConsent";
import { setCookie } from "@/utils/cookies";

interface LayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [consentGiven, setConsentGiven] = useState(false);

  const handleConsent = () => {
    setCookie("preferredLanguage", "en-US");
    setConsentGiven(true);
  };

  return (
    <GoogleAnalytics consentGiven={consentGiven}>
      <nav>
        <Nav />
      </nav>
      <main>
        {children}
        <CookieConsent onConsent={handleConsent} />
      </main>
      <footer>
        <Footer />
      </footer>
    </GoogleAnalytics>
  );
};
