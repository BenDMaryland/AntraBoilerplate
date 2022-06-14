const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: "/src/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",

                "sass-loader",
            ],
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                },
            },
        },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({   template: "./public/index.html",  }),
        new ESLintPlugin(),
    ],
};