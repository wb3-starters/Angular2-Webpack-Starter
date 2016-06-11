entry: {
    app: 'src/app.ts',
    vendor: 'src/vendor.ts'
},
output: {
  filename: 'dist/[name].js'
},
loaders: [
  {
    test: /\.ts$/
    loaders: 'ts'
  },
  {
    test: /\.css$/
    loaders: 'style!css'
  }
],
plugins: [
  new webpack.optimize.UglifyJsPlugin()
]