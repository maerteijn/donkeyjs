import { resolve } from 'path';
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { URL } from 'url'
const __dirname = new URL('.', import.meta.url).pathname;


const config = {
  entry: './src/main.js',
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath : '',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title:'Slim.js Demo App'
    })
  ]
}

export default config
