const FileLoader           = require('file-loader');
const HtmlWebPack          = require('html-webpack-plugin');
const { loader }           = require('mini-css-extract-plugin');
const MiniCssExtract       = require("mini-css-extract-plugin");
const CopyPlugin           = require("copy-webpack-plugin");


const CssMinimizer         = require('css-minimizer-webpack-plugin');
const Terser               = require('terser-webpack-plugin');



   module.exports = {
    mode: 'production', // Modo ambiente ("production" ! "develoment" ! "none")

    output:{
        clean: true, // limpiar archivos de salida (dist)
        filename: 'main.[contenthash].js'
    },

    module: {

        rules: [
          {
            test: /\.html$/, // Agregar en el bundle los archivos html
            loader: 'html-loader',
            options: {
                sources: false
            }
          },
          {
            test: /\.css$/, // para aplicar en archivos css 
            exclude: /style.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /style.css$/,
            use: [ MiniCssExtract.loader, 'css-loader' ]

          },
          {
            test: /\.(png|jpe?g|gif)$/i,  //esta es una exprecion regular que me sirve para evaluar cualquier img sin importaar donde este y usar
            use: [
              {
                loader: 'file-loader' // esto usara
              },
            ],
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              },
            },
          },
        ],
      },

    optimization: {
      
      minimize: true,
      minimizer: [
       new CssMinimizer(),
       new Terser(),
      ]
      
    },

    plugins: [
        new HtmlWebPack({   //configuracion del bundle para los archivos html (dist)
            title: 'Mi Webpack App',
            // filename: 'index.html',
            template: './src/index.html'
        }),

        new MiniCssExtract({
          filename: '[name].[fullhash].css',
          ignoreOrder: false
        }),

        new CopyPlugin({
          patterns:[
            { from: "src/assets", to: "assets/", },
          ],
        }),

    ],

  }