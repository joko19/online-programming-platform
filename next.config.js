const isProd = process.env.NODE_ENV === 'production'
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';


module.exports = {
  reactStrictMode: true,
  // assetPrefix: ghPages ? '/online-programming-platform/' : '',
  assetPrefix: isProd ? '/online-programming-platform' :'',
  basePath: isProd ? '/online-programming-platform/' : ''
}

module.exports = {
  images: {
    loader: 'imgix'
  },
}
