
module.exports = {
  entry: './public/src/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test : /\.scss$/,
        loaders : ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
 },
  resolve: {
    extensions: ['','.jsx', '.js', '.json']
  }
};
