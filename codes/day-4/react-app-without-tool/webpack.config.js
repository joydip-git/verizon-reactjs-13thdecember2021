const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
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
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'css-loader' },
                    { loader: 'style-loader' }
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