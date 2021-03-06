module.exports = {
  babelrcRoots: [".", "node_modules"],
  presets: [
    ["@babel/preset-env", { modules: false }],
    ["@babel/preset-react", { runtime: "automatic" }],
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
        ["@snowpack/babel-plugin-package-import", {webModulesDir: "statics/web_modules"}],
      ],
    },
    legacy: {
      presets: [
        ["@babel/preset-env", {
          useBuiltIns: "entry",
          corejs: 3,
          targets: {
            ie: 11
          },
          exclude: [
             //async-awaitをgeneratorに変換すると正常に動かないエッジケースを経験している
            "@babel/plugin-proposal-async-generator-functions"
          ]
        }]
      ],
      plugins: [
        "babel-plugin-transform-async-to-promises"
      ]
    }
  },
};
