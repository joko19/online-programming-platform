const isProd = process.env.NODE_ENV === 'production'


module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/online-programming-platform/' : '',
  basePath: isProd ? '/online-programming-platform/' : ''
}

module.exports = {
  images: {
    loader: 'imgix'
  },
}
