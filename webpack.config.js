var path = require('path')

var baseConfig = {
  output: {
    filename: '.\\output\\[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
    modules: [path.resolve(__dirname), "node_modules"]
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
    ]
  }
};

var client = Object.assign({}, baseConfig, {
  entry:  {
    "client": "./client/client.tsx"
  },
  devtool: 'source-map'
});

module.exports = [client];