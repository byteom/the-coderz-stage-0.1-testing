/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'avatar.vercel.sh' },
            { protocol: 'https', hostname: 'aceternity.com' },
            { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
            { protocol: 'https', hostname: 'picsum.photos' },
            { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
            { protocol: 'https', hostname: 'tse4.mm.bing.net' },
            { protocol: 'https', hostname: 'source.unsplash.com' },
            { protocol: 'https', hostname: 'assets.aceternity.com' },
        ],
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });

        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };

        return config;
    },
};

export default nextConfig;
