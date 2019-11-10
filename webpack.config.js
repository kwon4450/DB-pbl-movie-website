const path = require("path");
// const htmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",

  //start code
  entry: "./src/index.js",

  //result file dir
  output: {
    path: path.resolve(__dirname, "public/bundle"),
    filename: "bundle.js"
  },

  //Todo: webpack-dev-server 적용시켜보기
  // devServer: {
  //   contentBase: path.resolve(__dirname, "dist"),
  //   compress: true,
  //   port: 9000
  // },

  //loader
  module: {
    rules: [
      //js
      {
        test: /\.(js|jsx)$/,
        //node_module 안의 파일은 포함시키지 않음
        exclude: "/node_modules",

        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: []
          }
        }
      },
      //Todo: html, css도 웹팩 적용하기
      // //html
      // {
      //   test: /\.html$/,
      //   use: {
      //     loader: "html-loader",
      //     options:{
      //       minimize: true
      //     }
      //   }
      // },
      // //css
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"]
      // }
    ]
  },

  plugins : [
    // new htmlWebpackPlugin({
    //   template: "./public/index.html",
    //   filename: index.html
    // }),
    // new MiniCssExtractPlugin({
    //   filename: "style.css"
    // }),
    new CleanWebpackPlugin()
  ]
};