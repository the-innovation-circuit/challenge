const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  images: {
    domains: [
      'cloud-okol6b1vm-hack-club-bot.vercel.app',
      'cloud-qmweg7d8y-hack-club-bot.vercel.app'
    ]
  },
  async redirects() {
    return [
      {
        source: '/inr',
        destination: 'http://posters.innovation-challenge.co/inr', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/aud',
        destination: 'http://posters.innovation-challenge.co/aud', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/krw',
        destination: 'http://posters.innovation-challenge.co/krw', // Matched parameters can be used in the destination
        permanent: true,
      }
    ]
  },
})
