const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

module.export = {
  // context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'webpack Boilerplate',
        template: path.resolve(__dirname, './src/template.html'), // шаблон
        filename: 'index.html', // название выходного файла
    }),
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({ template: "./index.html" }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: "source", to: "dest" },
    //     { from: "other", to: "public" },
    //   ],
    // }),
  ],
};