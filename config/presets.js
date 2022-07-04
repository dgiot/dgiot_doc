module.exports = [
    [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
            debug: true,
            sitemap: {
                changefreq: 'weekly',
                priority: 0.5,
                ignorePatterns: ['/tags/**'],
                filename: 'sitemap.xml',
            },
            gtag: {
                trackingID: 'G-226F0LR9KE',
                anonymizeIP: true,
            },
            googleAnalytics: {
                trackingID: 'UA-141789564-1',
                anonymizeIP: true,
            },
            docs: {
                sidebarPath: require.resolve('./sidebars.js'),
                // Please change this to your repo.
                editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            },
            blog: {
                showReadingTime: true,
                // Please change this to your repo.
                editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            },
            theme: {
                customCss: require.resolve('../src/css/custom.css'),
            },
        }),
    ],
]
