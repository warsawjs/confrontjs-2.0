import { useEffect } from "react";
import Router from "next/router";
import * as gtag from "./utils/gtag";

export default function GoogleAnalytics({ children, consentGiven }) {
  const { GA_MEASUREMENT_ID } = gtag;

  useEffect(() => {
    if (GA_MEASUREMENT_ID && consentGiven) {
      const handleRouteChange = (url) => {
        gtag.pageview(url);
      };

      Router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        Router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [GA_MEASUREMENT_ID, consentGiven]);

  return children;
}
