
const isProd = process.env.NODE_ENV === 'production'
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';


module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/online-programming-platform' :'',
  basePath: isProd ? '/online-programming-platform' : '',
  images: {
    loader: 'imgix'
  },
}