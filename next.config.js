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
        source: '/photos',
        destination: '/photos', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/welcome',
        destination: '/welcome', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/inr',
        destination: 'http://posters.innovation-challenge.co/inr', // Matched parameters can be used in the destination
        permanent: true,
      }
    ]
  },
})
