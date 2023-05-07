//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nx/next/plugins/with-nx');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
    nx: {
        // Set this to true if you would like to to use SVGR
        // See: https://github.com/gregberge/svgr
        svgr: false,
    },
    experimental: {
        appDir: true,
        typedRoutes: true,
        serverActions: true,
    },
    // reactStrictMode: true,
    compiler: {
        styledComponents: {
            displayName: true,
            ssr: true,
            minify: true,
          },
    },
};

module.exports = withNx(nextConfig);
