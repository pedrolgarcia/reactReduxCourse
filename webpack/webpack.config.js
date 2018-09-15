const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './ex/index.js', // arquivo de entrada
    output: { // diretório de saída
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: { // configurando servidor de desenvolvimento
        port: 8080,
        contentBase: './public'
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
    ],
    module: {
        loaders: [{ // é quem carrega os arquivos, e faz o build
            test: /.js?$/, // que tipo de arquivo vai ser tratado
            loader: 'babel-loader', // qual loader vai ser utilizado
            exclude: /node_modules/, // não vai ler
            query: { // o que será interpretado
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    }
}