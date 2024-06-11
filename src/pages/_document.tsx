import { randomBytes } from "crypto";
import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";
//export const dynamic = 'force-dynamic'



export default function Document() {
  const nonce = randomBytes(128).toString("base64");

  const csp = `
  script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
  style-src 'self' 'nonce-${nonce}';
  img-src 'self' blob: data:;
  font-src 'self' https://fonts.gstatic.com;
  object-src 'none';
  base-uri 'none';
  connect-src 'self';
  form-action 'self';
  media-src 'self';
  frame-src 'self' https://datawrapper.dwcdn.net;
  manifest-src 'self';
`
  /* const csp = `object-src 'none'; base-uri 'none'; 
    script-src 'self' https: http: 'nonce-${nonce}' 'strict-dynamic';`;
    frame-ancestors 'none';
  */

  return (
    <Html lang="pt-BR">
      <Head nonce={nonce}>
        {process.env.NODE_ENV === "production" && (
          <meta property="csp-nonce" content={nonce} />
        )}
        {process.env.NODE_ENV === "production" && (
          <meta httpEquiv="Content-Security-Policy" content={csp} />
        )}
      </Head>
      <body>
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  );
}
