module.exports = {
    // The application ID provided by Algolia
    appId: 'YOUR_APP_ID',

    // Public API key: it is safe to commit it
    apiKey: 'YOUR_SEARCH_API_KEY',

    indexName: 'YOUR_INDEX_NAME',

    // Optional: see doc section below
    contextualSearch: true,

    // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    externalUrlRegex: 'external\\.com|domain\\.com',

    // Optional: Algolia search parameters
    searchParameters: {},

    // Optional: path for search page that enabled by default (`false` to disable it)
    searchPagePath: 'search',

    //... other Algolia params
}
