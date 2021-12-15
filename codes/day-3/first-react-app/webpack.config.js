//1. create an object with configuration
//2. export the object
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const webpackConfig = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(htm|html)$/,
                use: 'html-loader'
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'style-loader'
                    }
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: true })
    ],
    devServer: {
        port: 4000,
        static: path.resolve(__dirname, 'dist'),
        compress: true
    }
}
module.exports = webpackConfig