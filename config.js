const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://docs.aimstack.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://aimhub.io/asset/img/aimhub-icon-camel.png',
    logoLink: 'https://docs.aimstack.io/',
    githubUrl: 'https://github.com/aimhubio/aim-docs',
    title: ``,
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: ["/about", "/quick-start", "/cli", "/sdk", "/jupyter"],
    links: [{ text: 'AIM', link: 'https://aimstack.io/' }],
    frontline: false,
    ignoreIndex: false,
  },
  siteMetadata: {
    title: 'AIM Docs',
    description: 'For AI Engineers to build 10x faster',
    ogImage: null,
    docsLocation: 'https://github.com/aimhubio/aim-docs/master/content',
    favicon: 'https://aimstack.io/asset/img/favicon.ico',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'AIM Docs',
      short_name: 'aim_docs',
      start_url: '/',
      background_color: '#F5F7F9',
      theme_color: '#F5F7F9',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
