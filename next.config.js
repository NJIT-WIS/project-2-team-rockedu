/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  i18n: {
    locales: ['en-US', 'en-ES'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
  trailingSlash: false,
};

module.exports = nextConfig;