const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 下面是语法糖
        // loader: "css-loader"
        use: [
          // use 的顺序是从下往上执行
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
          },
        ]
      },
    ]
  }
}