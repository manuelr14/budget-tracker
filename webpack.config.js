const config = {
  entry: {
    index: "./public/index.js",
    // route: "./routes/api.js"
  },

  

  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  mode: "development"
};

module.exports = config;
