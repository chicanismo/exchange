module.exports = {
  entry: "./index.js",
  output: {
    filename: "./public/bundle.js",
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.es6', 'jsx', '.css'],
  },
  watch: true,
}
