/** @type {import('next').NextConfig} */

/* const cspHeader = `
  default-src 'self';
  script-src 'self';
  style-src 'self';
  img-src 'self' blob: data:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-src https://datawrapper.dwcdn.net;
  frame-ancestors 'self';
  block-all-mixed-content;
  upgrade-insecure-requests;
`; */

const nextConfig = {
  output: "standalone",
  /* async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self' https: ; script-src 'self' ; object-src 'none'; frame-src https://datawrapper.dwcdn.net;",
          },
        ],
      },
    ];
  }, */
};

module.exports = nextConfig;
