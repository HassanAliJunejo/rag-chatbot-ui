// @ts-check
import {themes as classicThemes} from '@docusaurus/preset-classic';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Book',
  tagline: 'Module 1: The Robotic Nervous System (ROS 2)',
  favicon: 'img/favicon.ico',

  // CHANGE 1: Aapka Vercel deployment URL yahan aayega
  url: 'https://rag-chatbot-ui.vercel.app', 
  
  // CHANGE 2: Isay '/' kar dein taake main domain par site load ho
  baseUrl: '/',

  // GitHub pages deployment config (Keep as is or update if needed)
  organizationName: 'HassanAliJunejo', 
  projectName: 'rag-chatbot-ui', 

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    './plugins/docusaurus-postcss/src/index.js',
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/HassanAliJunejo/rag-chatbot-ui/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/HassanAliJunejo/rag-chatbot-ui/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ROS 2 Humanoid Robotics',
        logo: {
          alt: 'ROS 2 Humanoid Robotics Logo',
          src: 'img/simple-robot.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Module 1',
          },
          {
            to: '/chatbot',
            label: 'Chatbot',
            position: 'left',
          },
          {
            to: '/rag-chatbot',
            label: 'RAG Chatbot',
            position: 'left',
          },
          {
            href: 'https://github.com/HassanAliJunejo/rag-chatbot-ui',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Module 1',
                to: '/docs/modules/module-1-ros2/chapter-1-introduction-to-ros2',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/HassanAliJunejo/rag-chatbot-ui',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ROS 2 Humanoid Robotics Book. Built with Docusaurus.`,
      },
      prism: {
        theme: classicThemes.github,
        darkTheme: classicThemes.dracula,
      },
      algolia: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'ros2-humanoid-book',
        contextualSearch: true,
        searchPagePath: 'search',
      },
    }),
};
export default config;