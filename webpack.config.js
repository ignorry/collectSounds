const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const config = {
  entry: {
    index: "./src/index.tsx",
    ['cache-worker']: "./src/serviceWorkers/cacheWorker.ts",
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name]-bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: "public",
          globOptions: {
            ignore: ["**/index.html"],
          },
        }
      ],
    }),
    new Dotenv(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
};

module.exports = (env, argv) => {
  if ( argv.mode === 'production' ) {
    config.output.publicPath = '/collectSounds/';
  }

  return config;
};