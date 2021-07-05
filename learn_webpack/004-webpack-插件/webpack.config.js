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
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('postcss-preset-env')
                ]
              }
            }
          },
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
      // {
      //   test: /\.(jpg|png|gif|svg|jpeg)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       // outputPath: "img",
      //       name: 'img/[name]_[hash:6].[ext]'
      //     }
      //   }
      // },
      // {
      //   test: /\.(jpg|png|gif|svg|jpeg)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       // outputPath: "img",
      //       name: 'img/[name]_[hash:6].[ext]',
      //       limit: 100 * 1024
      //     }
      //   }
      // }
      {
        test: /\.(jpg|png|gif|svg|jpeg)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      },
      // {
      //   test: /\.(eot|ttf|woff2?)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       outputPath: 'font',
      //       name: '[name]_[hash:6][ext]'
      //     }
      //   }
      // }
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]'
        }
      }
    ]
  }
}