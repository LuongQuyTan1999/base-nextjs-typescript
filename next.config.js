// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require("next-compose-plugins");
const { i18n } = require("./next-i18next.config");

module.exports = withPlugins([], {
  reactStrictMode: false,
  i18n,
  env: {
    BASE_URL: process.env.BASE_URL,
    NEXT_APP_ID: process.env.NEXT_APP_ID,
    NEXT_CLIENT_ID: process.env.NEXT_CLIENT_ID,
  },
  images: {
    domains: [],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.tsx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            babel: true,
            titleProp: true,
          },
        },
        {
          loader: "url-loader",
          options: {
            name: "images/[name].[hash:8].[ext]",
            limit: 500000,
          },
        },
      ],
    });

    return config;
  },
});
