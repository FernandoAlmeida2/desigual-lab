/** @type {import('next').NextConfig} */

/*
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  }
}

 */

const nextConfig = {
  output: "standalone",
 /*  cookieStorage: {
    sameSite: "lax",
  } */
};

module.exports = nextConfig;
