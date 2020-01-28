process.env.BABEL_ENV = "production";

module.exports = {
  mode: process.env.NODE_ENV || "production"
};
