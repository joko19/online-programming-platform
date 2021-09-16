const { redirect } = require('next/dist/server/api-utils');

const isProd = process.env.NODE_ENV === 'production'
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';
'use strict'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/online-programming-platform' : '',
  basePath: isProd ? '/online-programming-platform' : '',
  images: {
    loader: 'imgix'
  }
}
// module.exports = withBundleAnalyzer({
//   // async redirect() {
//   //   return [
//   //     {
//         // source: '/',
//         // destination: '/067dd719a912471ea9a3ac10710e7fdf',
//         // don't set permanent to true because it will get cached by browser
//         // while developing on localhost
//         // permanent: true,
//         reactStrictMode: true,
//         assetPrefix: isProd ? '/online-programming-platform' : '',
//         basePath: isProd ? '/online-programming-platform' : '',
//         images: {
//           loader: 'imgix'
//         },
//   //     }
//   //   ]
//   // }
// })