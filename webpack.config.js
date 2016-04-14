module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist/js',
    publicPath: '/dist/js/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
};
