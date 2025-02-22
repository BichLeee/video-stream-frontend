import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    webpack(config, { isServer }) {
        // Modify Webpack to handle SVG files
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        // Add any options you want for SVGR here
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
