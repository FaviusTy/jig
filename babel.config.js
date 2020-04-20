module.exports = {
  babelrcRoots: [".", "node_modules"],
  presets: [
    ["@babel/preset-env", { modules: false }],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  env: {
    development: {
      plugins: [
        "@favi_ty/babel-plugin-esm-url-resolver",
        "@favi_ty/babel-plugin-esm-pikacdn",
      ],
    },
  },
};
