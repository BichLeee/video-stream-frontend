import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack(config, { isServer }) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {},
                },
            ],
        });

        return config;
    },
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
