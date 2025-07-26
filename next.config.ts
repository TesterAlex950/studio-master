import type {NextConfig} from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  basePath: isProduction ? '/studio-master' : '',
  assetPrefix: isProduction ? '/studio-master' : '',
};

export default nextConfig;
