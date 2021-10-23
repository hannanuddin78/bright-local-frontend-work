const withImages = require('next-images')
module.exports = withImages()

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['brightlocal-corp-assets.s3.amazonaws.com', 'corp-brightlocal.imgix.net','www.brightlocal.com',],
  }
}