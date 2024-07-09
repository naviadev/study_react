const path = require('path');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test : /\.css%/ , 
        use : ['style-loader', 'css-loader']
      },
      {
        test : /\.js|jsx|ts|tsx%/ , 
        use : 'babel-loader', 
        exclude : "/node_modules/"
      },
      {
        test : /ts|tsx%/ , 
        use : 'ts-loader', 
        exclude : "/node_modules/"
      }
    ]
  },
  resolve: {
    extensions: [".css", ".js", ".ts", ".tsx", ".jsx"]
  }
}