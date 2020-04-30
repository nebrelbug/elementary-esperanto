module.exports = {
  title: 'Elementary Esperanto',
  tagline:
    'Teaching Esperanto in public elementary schools could revolutionize language learning in the US',
  url: 'https://elementary-esperanto.now.sh/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'nebrelbug', // Usually your GitHub org/user name.
  projectName: 'elementary-esperanto', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Elementary Esperanto',
      logo: {
        alt: 'Green Esperanto Flag',
        src: 'img/android-chrome-192x192.png'
      },
      links: [
        {
          to: 'esperanto',
          // activeBasePath: 'docs',
          label: 'Esperanto',
          position: 'left'
        },
        {
          to: 'about',
          // activeBasePath: 'docs',
          label: 'About',
          position: 'left'
        },
        {
          to: 'resources',
          // activeBasePath: 'docs',
          label: 'Resources',
          position: 'left'
        },
        { to: 'blog', label: 'Blog', position: 'right' }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Esperanto',
              to: 'esperanto'
            },
            {
              label: 'Resources',
              to: 'resources'
            },
            {
              label: 'About',
              to: 'about'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Chat',
              href: 'https://gitter.im/elementary-esperanto/community'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Elementary Esperanto. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/nebrelbug/elementary-esperanto/edit/master/',
          routeBasePath: '' // Set to empty string.
        },

        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/nebrelbug/elementary-esperanto/edit/master/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
