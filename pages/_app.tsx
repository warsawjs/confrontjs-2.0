import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Layout} from "@/components/layout/Layout";
import Script from 'next/script'

export default function App({Component, pageProps}) {
    return (
        <>
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
