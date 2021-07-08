const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const path = require('path')


module.exports = {
  target: "web",
  mode: 'development',
  devtool: "source-map",
  // watch: true,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/main.js',
  },
  devServer: {
    contentBase: "./public",
    hot: true,
    // host: '0.0.0.0',
    port: 8000,
    open: true,
    compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^api": ""
        },
        secure: false,
        changeOrigin: true
      }
    }
  },
  resolve: {
    extensions: [".js", ".json", ".mjs", ".vue", ".ts", ".jsx", ".tsx"],
    alias: {
      "js": path.resolve(__dirname, "./src/js"),
      "@": path.resolve(__dirname, "./src")
    }
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
      {
        test: /\.(jpg|png|gif|svg|jpeg)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:6][ext]'
        },
          parser: {
            dataUrlCondition: {
            maxSize: 10 * 1024
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]'
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: '呵呵'
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "public",
    //       to: "./",
    //       globOptions: {
    //         ignore: [
    //           '**/index.html'
    //         ]
    //       }
    //     }
    //   ]
    // }),
    new VueLoaderPlugin()
  ]
}