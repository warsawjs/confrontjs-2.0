import { Layout } from "@/components/layout/Layout";
import "@/styles/globals.css";
import { GA_MEASUREMENT_ID } from "@/utils/gtag";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";

const seoImageUrl =
  "https://s3.eu-central-1.amazonaws.com/confrontjs.com/banners/og2024.png";

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const canonical =
    process.env.NEXT_PUBLIC_HOST &&
    `${process.env.NEXT_PUBLIC_HOST}${asPath === "/" ? "" : asPath}`.split(
      "?"
    )[0];

  return (
    <>
      <DefaultSeo
        titleTemplate="%s - ConfrontJS"
        openGraph={{
          images: [
            {
              url: seoImageUrl,
              secureUrl: seoImageUrl,
            },
          ],
        }}
        canonical={canonical}
      />
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
