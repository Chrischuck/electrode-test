const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = function (composer, options, compose) {
  const config = compose();


  const plugins = [
    new FaviconsWebpackPlugin({
      logo: __dirname + '/src/client/images/logo.png',
      prefix: 'icons-[hash]/',
      emitStats: true,
      statsFilename: '../server/iconstats.json',
      persistentCache: true,
      inject: false,
      background: '#FFFFFF',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        chrome: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    })
  ]

  config.plugins =  mergePlugins(config.plugins, plugins)

  return config
};

function mergePlugins(initialPlugins, newPlugins) {
  const plugins = {}
  initialPlugins.forEach(plugin => plugins[plugin.constructor.name] = plugin)
  newPlugins.forEach(plugin => plugins[plugin.constructor.name] = plugin)
  return Object.values(plugins)
}