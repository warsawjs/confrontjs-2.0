import { useState, useEffect } from "react";
import { setCookie, getCookie } from "../utils/cookies";

interface Props {
  onConsent: () => void;
}

const CookieConsent: React.FC<Props> = ({ onConsent }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentStatus = getCookie("cookieConsent");
    if (!consentStatus) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookieConsent", "accepted", { expires: 365 });
    setIsVisible(false);
    onConsent();
    document.body.style.overflow = "auto";
  };

  const handleRefuse = () => {
    setCookie("cookieConsent", "refused", { expires: 365 });
    setIsVisible(false);
    document.body.style.overflow = "auto";
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50"
        style={{ zIndex: 9998 }}
      ></div>
      <div
        className="fixed flex justify-center gap-6 bottom-0 left-0 w-full p-6 bg-tertiary shadow-md text-center"
        style={{ zIndex: 9999 }}
      >
        <p className="flex text-left py-4 text-white">
          We use cookies to improve your browsing experience. By continuing to
          use this website, you agree to our use of cookies.
        </p>
        <div className="flex flex-row gap-4 py-2 lg:py-0">
          <button
            onClick={handleRefuse}
            className="text-sm text-white uppercase px-6 py-2 rounded-xl border-2 font-bold hover:bg-danger hover:text-black transition-all duration-300 ease-in-out"
          >
            Refuse
          </button>

          <button
            onClick={handleAccept}
            className="text-sm text-white uppercase px-6 py-2 rounded-xl border-2 font-bold hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out"
          >
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
