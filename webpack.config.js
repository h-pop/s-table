const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/i,
                loader: 'file-loader',
                options: {
                  outputPath: 'assets',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'sTable.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'sTable',
    },
    devtool: false,
    devServer: {
        static: path.join(__dirname),
        port: 9000,
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'example.html', 
                    to: 'example.html'
                }
            ]
        }),
    ]
};