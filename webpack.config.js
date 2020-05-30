
const path =  require('path'); // to include node module path
const HtmlWebpackPlugin = require('html-webpack-plugin'); // to include packages

// config (node.js syntax)
// exporting the config 
module.exports = {
entry:['./src/js/index.js'], // entry point where webpack starts bundling, where wepback will look for dependencies to bundle together
output:{ // where to save bundle file
         path:path.resolve(__dirname,'dist'), // current absolute path to the folder
         filename: 'js/bundle.js' // final js file
        
         // webpack
         // production - automatically enable all kind of optimization like minification and tree shaking to reduce final bundle size
         // development - builds our bundle without minifying our code to be as fast as possible
    },
  devServer: {
      contentBase: './dist' // content base - specify folder where webpack should serve our files (we used dist folder) because it is the code that we will ship to client (final code)
  },
  plugins: [ // receives an array of plugins that we are using
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template:'./src/index.html' // starting html file
        })
    ],
    module: {
        rules: [ // receives an array for all the loaders
            {
                test: /\.js$/, // regular expression (testing and look all javascript files)
                exclude: /node_modules/, // babel would also apply in our thousand of node modules js files
                use:{
                    loader:'babel-loader' // will use babel
                }
            }
        ]
    }   

};