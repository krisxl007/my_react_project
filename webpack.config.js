const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

// New a plugin instance
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, 'src/index.html'), // source file
    filename: 'index.html' // output file
})

module.exports = {
    mode: 'development',
    plugins: [
        htmlPlugin
    ],
    module: {
      rules: [
          {
              test: /\.js|jsx$/,
              use: 'babel-loader',
              exclude: /node_modules/
          }
      ]
    },
    resolve: {
        // configure auto extensions for js import/export file
        extensions: [
            '.js',
            '.jsx',
            '.json'
        ]
    }
}