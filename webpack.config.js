const path = require('path');

module.exports = {
    entry: './src/index.ts',
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
};