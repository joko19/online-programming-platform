const isProd = process.env.NODE_ENV === 'production'
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';


module.exports = {
  reactStrictMode: true,
  // assetPrefix: ghPages ? '/online-programming-platform/' : '',
  assetPrefix: '.',
  basePath: ghPages ? '/online-programming-platform/' : ''
}

module.exports = {
  images: {
    loader: 'imgix'
  },
}
