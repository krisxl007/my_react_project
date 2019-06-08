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
          {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/},
          {test: /\.css$/, use: ['style-loader', 'css-loader']}, // configure css loader, usually for loading 3rd party css file
          {test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader']} // configure scss loader, usually for loading customize style file
      ]
    },
    resolve: {
        extensions: [ // configure auto extensions for js import/export file
            '.js',
            '.jsx',
            '.json'
        ],
        alias: {
            '@': path.join(__dirname, './src') // use '@' for src directory
        }
    }
}