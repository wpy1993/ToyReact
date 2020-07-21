module.exports = {
  entry: './main.js',
  // 开发模式，防止压缩代码
  mode: 'development',
  optimization: {
    minimize: false
  },
  // 配置规则
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [[
              '@babel/plugin-transform-react-jsx',
              {pragma: 'ToyReact.createElement'}
            ]]
          }
        }
      }
    ]
  }
}