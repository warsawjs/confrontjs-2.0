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
        className="fixed bottom-0 left-0 flex flex-col justify-center w-full gap-6 p-6 shadow-md md:flex-row bg-tertiary"
        style={{ zIndex: 9999 }}
      >
        <p className="py-4 text-center text-white md:text-left ">
          We use cookies to improve your browsing experience. By continuing to
          use this website, you agree to our use of cookies.
        </p>
        <div className="flex flex-row justify-center gap-4 py-2 lg:py-0">
          <button
            onClick={handleRefuse}
            className="px-6 py-2 text-sm font-bold text-white uppercase transition-all duration-300 ease-in-out border-2 rounded-xl hover:bg-danger hover:text-black"
          >
            Refuse
          </button>

          <button
            onClick={handleAccept}
            className="px-6 py-2 text-sm font-bold text-white uppercase transition-all duration-300 ease-in-out border-2 rounded-xl hover:bg-secondary hover:text-black"
          >
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
