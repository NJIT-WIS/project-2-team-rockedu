import '../styles/global.css'
import Script from 'next/script'

const GA_TRACKING_ID = 'G-WG41M5B63B'

export default function App({ Component, pageProps }) {
  return <>
    <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
          `,
      }}
    />
    <Component {...pageProps} />
  </>
}
