const path = require('path');
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },
    devServer: {
        port: 3010,
        watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader',
                    'source-map-loader',
                ]
            }
        ]
    },
    plugins: [
        new SourceMapDevToolPlugin({
          filename: "[file].map"
        }),
      ],
};