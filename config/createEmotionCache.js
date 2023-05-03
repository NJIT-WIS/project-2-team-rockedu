import createCache from "@emotion/cache";

const isBrowser = typeof document !== "undefined";

export const emotionCacheInsertionPointKey = "emotion-insertion-point";

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export default function createEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector(
      `meta[name="${emotionCacheInsertionPointKey}"]`
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: "mui-style", insertionPoint });
}
