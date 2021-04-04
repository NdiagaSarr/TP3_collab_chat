const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html", 
  filename: "./index.html"
});
module.exports = (env, argv) => {
  console.log(argv.mode);
  return {
    entry: "./src/index.jsx",
    output: {
      path: path.join(__dirname, 'dist'),
      filename: "[name].js"
    },
    plugins: [htmlPlugin],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [ "babel-loader" , "eslint-loader" ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: "file-loader",
          options: { name: '/img/[name].[ext]' }
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"],
    }
  };
};
