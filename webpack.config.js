const FileLoader           = require('file-loader');
const HtmlWebPack          = require('html-webpack-plugin');
const { loader }           = require('mini-css-extract-plugin');
const MiniCssExtract       = require("mini-css-extract-plugin");
const CopyPlugin           = require("copy-webpack-plugin");


   module.exports = {
    mode: 'development', // Modo ambiente ("production" ! "develoment" ! "none")

    output:{
        clean: true // limpiar archivos de salida (dist)
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
        ],
      },

    optimization: {},

    plugins: [
        new HtmlWebPack({   //configuracion del bundle para los archivos html (dist)
            title: 'Mi Webpack App',
            // filename: 'index.html',
            template: './src/index.html'
        }),

        new MiniCssExtract({
          filename: '[name].css',
          ignoreOrder: false
        }),

        new CopyPlugin({
          patterns:[
            { from: "src/assets", to: "assets/", },
          ],
        }),

    ],

  }