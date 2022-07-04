module.exports = [
    [
        '@docusaurus/plugin-ideal-image',
        {
            quality: 70,
            max: 1030, // max resized image's size.
            min: 640, // min resized image's size. if original is lower, use that size.
            steps: 2, // the max number of images generated between min and max (inclusive)
            disableInDev: false,
        },
    ],
    [
        '@docusaurus/plugin-pwa',
        {
            debug: true,
            offlineModeActivationStrategies: [
                'appInstalled',
                'standalone',
                'queryString',
            ],
            pwaHead: [
                {
                    tagName: 'link',
                    rel: 'icon',
                    href: '/img/logo.png',
                },
                {
                    tagName: 'link',
                    rel: 'manifest',
                    href: '/manifest.json',
                },
                {
                    tagName: 'meta',
                    name: 'theme-color',
                    content: 'rgb(37, 194, 160)',
                },
            ],
        },
    ],
]

