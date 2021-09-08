const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: { main: './src/index.js' },
  output: {
    filename: 'index-[contenthash:6].js',
    path: path.resolve(__dirname, '../dist'),
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback: true,
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: '75',
                progressive: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'el-system strona firmowa',
      template: 'src/templates/template.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        // { from: 'public/images', to: 'images' },
        { from: 'public/icons', to: 'icons' },
      ],
    }),
  ],
};
