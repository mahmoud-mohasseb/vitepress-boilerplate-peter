export default {
    title: 'VitePress peter-chaudhary boilerplate',
    description: ' Just playing around vitepres 🇮🇳 for peter chaudhary 💻',
    themeConfig: {
        docsDir: 'docs',
        logo: "https://media.istockphoto.com/vectors/triangle-logo-upside-down-flipped-abstract-prism-geometric-shape-vector-id1279136583?b=1&k=20&m=1279136583&s=612x612&w=0&h=jmXIsQCcOe-23uv2_FH19AeNK6YHiS_mY7arNgPs_Bc=",
        // carbonAds: {
        //     code: 'your-carbon-code',
        //     placement: 'your-carbon-placement'
        // },
        algolia: {
            apiKey: '',
            indexName: 'vitepress'
          },
        nav: [
            // NavbarGroup
            {
              title: "Guide",
              text: "Guide",
              link: "/guide/what-is-vitepress",
              // this item will always be active
            //   items: ["vuepress", "getting-started"],
            },
            // NavbarItem
            {
              title: "foo",
              text: "foo",
              link: "/foo/one",
            },
            {
                title: "bar",
                text: "bar",
                link: "/bar/three",
              },
            // string - page file path
            //   "/README.md",
          ],
        sidebar: [
            {
                text: 'Guide',
                collapsible: true,
                collapsed: true,
                items: [
                  {
                      text: 'introduction',
                      link: '/guide/introduction'
                  },
                  {
                      text: 'peter',
                      link: '/guide/peter'
                    },
                    {
                        text: 'what-is-vitepress',
                        link: '/guide/what-is-vitepress'
                    },
               
              ]
            },
            {
                text: 'foo',
                items: [
                    {
                        text: 'Introduction',
                        link: '/foo/one'
                    },         
                ]
            },
            {
                text: 'bar',
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: 'three',
                        link: '/bar/three'
                    },    
                    {
                        text: 'four',
                        link: '/bar/four'
                    },    
                ]
              }
          ],

        footer: {
          message: '🇮🇳 Released under the License.🇮🇳 ',
            copyright: 'Copyright © 2019-present peter-chaudhary',
        }

    }
  }