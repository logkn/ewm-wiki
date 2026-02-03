// @ts-check

const config = {
  title: "Earth, Wind & Mire Wiki",
  tagline: "Campaign wiki",
  url: "https://logkn.github.io",
  baseUrl: "/ewm-wiki/",
  organizationName: "logkn",
  projectName: "ewm-wiki",
  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js")
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],

  themeConfig: {
    navbar: {
      title: "Earth, Wind & Mire",
      items: [
        {
          type: "doc",
          docId: "index",
          position: "left",
          label: "Wiki"
        }
      ]
    }
  }
};

module.exports = config;
