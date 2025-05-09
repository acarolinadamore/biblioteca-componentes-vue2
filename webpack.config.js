const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': path.resolve(__dirname, 'src') // ← agora o @ funciona
  },
  extensions: ['*', '.js', '.vue', '.json']
},
  devServer: {
  contentBase: path.join(__dirname, 'public'),
  compress: true,
  port: 8081, // ← MUDEI PARA 8081
  open: true, // ← ISSO FAZ ABRIR AUTOMATICAMENTE
  hot: true,
  overlay: true,
  publicPath: '/dist/' // ← IMPORTANTE!
},
  performance: {
    hints: false
  },
  devtool: 'eval-source-map'
};