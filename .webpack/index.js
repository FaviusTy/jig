const path = require('path')
const cwd = process.cwd()

module.exports = (env, argv, options = {}) => {
  return Object.assign(
    {
      mode: argv.mode || 'development',
      devServer: {
        contentBase: path.resolve(cwd, 'dist'),
        port: 3000,
      },
    },
    options,
  )
}
