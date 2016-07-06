let path = require('path');

let srcPath = './ts/app';
let libName = 'App';

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, srcPath, 'app.ts'),
  output: {
    path: path.join(__dirname, 'dist'),
    library: libName,
    libraryTarget: 'this',
    filename: libName + '.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.ts$/,
        loader: 'babel-loader!ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.css'],
  },

  externals: {
    /*'react': 'React',
    'react-dom' : 'ReactDOM'*/
  }
};
