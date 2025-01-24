// next.config.mjs
export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'medrepo-bucket.s3.ap-south-1.amazonaws.com',
          pathname: '**', // This allows all paths under the hostname
        },
      ],
    },
  }
  