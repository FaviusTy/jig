module.exports = (options = {}) => ({
  plugins: ['postcss-import', 'postcss-cssnext'].map(plugin =>
    require(plugin)(options[plugin] || {}),
  ),
})
