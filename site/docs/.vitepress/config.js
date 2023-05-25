export default {
    base: process.env.NODE_ENV === 'production' ? '/xrikis/' : '/',
    themeConfig: {
        siteTitle: "xrikis-ui",
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
                            text: "Button",
                            link: "/components/button/index",
                        },
                        {
                            text: "NavBar",
                            link: "/components/navbar/index"
                        }
                    ],
                }
            ]
        },
        socialLinks: [
            {icon: "github", link: "https://github.com/griki4/Xrikis-ui"},
        ],
    },
    markdown: {
        extendMarkdown: (md) => {
            // 修改解析器的配置
            md.set({ html: true });
            md.renderer.rules.image = (tokens, idx, options, env, self) => {
                // 将`<img>`标签渲染为内联元素
                const token = tokens[idx];
                token.tag = 'img';
                return self.renderToken(tokens, idx, options);
            };
        },
    },
};
