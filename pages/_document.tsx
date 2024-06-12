import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="pt-br" className="scroll-smooth">
      <Head />
      <GoogleTagManager gtmId="GTM-WVW7S9BN" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
