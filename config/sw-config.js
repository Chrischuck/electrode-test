module.exports = {
  cache: {
    cacheId: "test",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "test",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
