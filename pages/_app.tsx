import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Layout} from "@/components/layout/Layout";
import Script from 'next/script'
import { GA_MEASUREMENT_ID } from "@/utils/gtag";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
          </Script>
        </>
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
