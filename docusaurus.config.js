// @ts-check
import {themes as classicThemes} from '@docusaurus/preset-classic';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Book',
  tagline: 'Module 1: The Robotic Nervous System (ROS 2)',
  favicon: 'img/favicon.ico',

  url: 'https://rag-chatbot-ui.vercel.app', 
  baseUrl: '/',

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
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
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
        copyright: `Copyright © ${new Date().getFullYear()} ROS 2 Humanoid Robotics Book. Built with Docusaurus.`,
      },
      // CHANGE: Theme ko simple kar diya taake error na aaye
      prism: {
        theme: classicThemes.github,
        darkTheme: classicThemes.dracula,
      },
    }),
};

export default config;