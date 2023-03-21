import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Layout} from "@/components/layout/Layout";
import Script from 'next/script'

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Script
                id="tag-manager"
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M89PW2Q');`,
                }}
            />
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=UA-124334065-1"/>
            <Script
                id='google-analytics'
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-124334065-1', {
page_path: window.location.pathname,
});
`,
                }}
            />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
