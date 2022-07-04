module.exports = {
    style: 'dark',
    links: [{
        title: 'Docs',
        items: [{
            label: '快速上手',
            to: '/',
        },],
    },
        {
            title: 'Community',
            items: [{
                label: 'Issue Tracker',
                href: 'https://github.com/dgiot/dgiot/issues',
            },
                {
                    label: 'Pull Requests',
                    href: 'https://github.com/dgiot/dgiot/pulls',
                },
                {
                    label: 'Discussions',
                    href: 'https://github.com/dgiot/dgiot/discussions',
                },
            ],
        },
        {
            title: 'More',
            items: [{
                label: 'Blog',
                to: '/',
            },
                {
                    label: 'GitHub',
                    href: 'https://github.com/dgiot/dgiot',
                },
            ],
        },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Dgiot, Inc. Built with Docusaurus.`,
}
