module.exports = {
  babelrcRoots: [".", "node_modules"],
  presets: [
    ["@babel/preset-env", { modules: false }],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining"
  ],
  env: {
    development: {
      plugins: [
        "@favi_ty/babel-plugin-esm-url-resolver",
        "@favi_ty/babel-plugin-esm-pikacdn",
      ],
    },
    legacy: {
      presets: [
        ["@babel/preset-env", {
          useBuiltIns: "entry",
          corejs: 3,
          targets: {
            ie: 11
          }
        }]
      ]
    }
  },
};
