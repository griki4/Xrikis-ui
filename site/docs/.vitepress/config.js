export default {
    base: process.env.NODE_ENV === 'production' ? '/xrikis/' : '/',
    themeConfig: {
        siteTitle: "Xrikis-ui",
        nav: [
            {text: "指南", link: "/guild/installation"},
            {text: "组件", link: "/components/button/"},
        ],
        sidebar: {
            "/guild/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "安装",
                            link: "/guild/installation",
                        },
                        {
                            text: "快速开始",
                            link: "/guild/quickstart",
                        },
                    ],
                },
                {
                    text: "进阶",
                    items: [
                        {
                            text: "xx",
                            link: "/xx",
                        },
                    ],
                },
            ],
            "/components/": [
                {
                    text: "基础组件",
                    items: [
                        {
                            text: "Button 按钮",
                            link: "/components/button/index",
                        },
                        {
                            text: "NavBar 导航栏",
                            link: "/components/navbar/index"
                        },
                        {
                            text: "Icon 图标",
                            link: "/components/icon/index"
                        },
                        {
                            text: "Input 输入框",
                            link: "/components/input/index"
                        }
                    ],
                }
            ]
        },
        socialLinks: [
            {icon: "github", link: "https://github.com/griki4/Xrikis-ui"},
        ],
    }
};
