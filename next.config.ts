import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack(config) {
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
    sassOptions: {
        additionalData: `$var: red;`,
    },
    i18n: {
        locales: ["default", "vi"],
        defaultLocale: "default",
        localeDetection: false,
    },
    trailingSlash: true,
};

export default nextConfig;
