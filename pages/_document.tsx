import { Html, Head, Main, NextScript } from "next/document";
import { GA_MEASUREMENT_ID } from "../utils/gtag";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript
          id="no-script-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M89PW2Q"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`,
          }}
        />
      </body>
    </Html>
  );
}
