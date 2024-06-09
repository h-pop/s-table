const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
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
        extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'source-map',
    devServer: {
        static: path.join(__dirname),
        port: 9000,
    },
    output: {
        filename: 'sTable.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'sTable',
        libraryTarget: 'umd',
    },
};