// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'DGIOT让万物互联变得更简单',
    tagline: 'DGIOT帮助开发者用简单的几行代码可以快速对接子系统实现数据汇聚，也可以零代码实现常见设备接入',
    url: 'https://www.dgiotcloud.cn',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.png',
    organizationName: 'dgiot', // Usually your GitHub org/user name.
    projectName: 'dgiot_doc', // Usually your repo name.
    presets: require('./config/presets.js'),
    plugins: require('./config/plugins.js'),
    i18n: require('./config/i18n.js'),
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            algolia: require('./config/algolia.js'),
            navbar: require('./config/navbar.js'),
            footer: require('./config/footer.js'),
            // prism: {
            //     theme: lightCodeTheme,
            //     darkTheme: darkCodeTheme,
            // },
        }),
};

module.exports = config;
