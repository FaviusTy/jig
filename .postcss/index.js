module.exports = (options = {}) => ({
  plugins: ['postcss-import', 'postcss-preset-env'].map(plugin =>
    require(plugin)(options[plugin] || {}),
  ),
})
