import '../styles/global.css'
import Script from 'next/script'
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../config/createEmotionCache';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import theme from '../config/theme';
import CookieConsent from "react-cookie-consent";

const GA_TRACKING_ID = 'G-WG41M5B63B'


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return <CacheProvider value={emotionCache}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <base href={process.env.NEXT_GITHUB_PAGES_URL || ""} target="_blank" />
    </Head>
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
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      >
        We use cookies to enhance your experience.{" "}
        <span style={{ fontSize: "10px" }}>Please accept the cookies to continue</span>
      </CookieConsent>
    </ThemeProvider>
  </CacheProvider>
}
