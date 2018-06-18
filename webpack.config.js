
var webpack = require('webpack');
module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: "./dist/bundle.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: ["*",".ts",".js"]
    },
    module: {
        rules: [
            {test:/\.ts$/, loader:"ts-loader"}
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
          // test: /\.xxx$/, // may apply this only for some modules
          options: {
            exclude: "./previous_section/"
          }
        })
    ]
};