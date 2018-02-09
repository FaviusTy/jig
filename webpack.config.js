const path = require('path')
const cwd = process.cwd()

module.exports = (env, argv) =>
  require('./.webpack')(env, argv, {
    entry: path.resolve(cwd, 'src'),
    output: {
      path: path.resolve(cwd, 'dist'),
    },
  })
