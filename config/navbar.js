module.exports = {
    title: 'dgiot',
    logo: {
        alt: 'dgiot Logo',
        src: 'img/logo.png',
    },
    items: [
        {
            href: 'http://www.dgiotcloud.cn',
            label: 'Home',
            position: 'right'
        },
        {
            href: 'https://prod.dgiotcloud.cn/#/login',
            label: 'DgiotCloud',
            position: 'right'
        },
        {
            href: 'http://www.dgiotcloud.cn/?page_id=5',
            label: 'Products',
            position: 'right'
        },
        {
            type: 'doc',
            docId: 'product_doc/index',
            position: 'right',
            label: 'Docs',
        },
        {
            href: 'https://www.dgiotcloud.cn/?cat=19',
            label: 'Blog',
            position: 'right'
        },
        {
            href: 'http://www.dgiotcloud.cn/?cat=1',
            label: 'Media',
            position: 'right'
        },
        {
            label: 'Solution',
            position: 'right',
            to: '/',
            items: [
                {
                    label: 'SmartBuilding',
                    to: 'http://www.dgiotcloud.cn/?cat=4',
                },
                {
                    label: 'SmartVenue',
                    to: 'http://www.dgiotcloud.cn/?cat=5',
                },
                {
                    label: 'DigitalFactory',
                    to: 'http://www.dgiotcloud.cn/?cat=6',
                },
                {
                    label: 'CloudDetection',
                    to: 'http://www.dgiotcloud.cn/?cat=22',
                },
                {
                    label: 'CloudTest',
                    to: 'http://www.dgiotcloud.cn/?cat=23',
                },
            ],
        },
        {
            href: 'http://www.dgiotcloud.cn/?page_id=12',
            label: 'Community',
            position: 'right'
        },
        {
            href: 'http://www.dgiotcloud.cn/?page_id=2',
            label: 'Support',
            position: 'right'
        },
        {
            type: 'localeDropdown',
            position: 'right',
        },
        {
            href: 'https://github.com/dgiot/dgiot',
            label: 'GitHub',
            position: 'right',
        }
    ],
}

