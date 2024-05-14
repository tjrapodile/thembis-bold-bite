const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/, // Rule for CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Rule for image files
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/', // Output path for images
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './build/index.html', // Path to your template file
      filename: 'index.html', // Output file
    }),
    // ... (any other plugins you have)
  ],
};
