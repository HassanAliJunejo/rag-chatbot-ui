import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'feb'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '87c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '458'),
            routes: [
              {
                path: '/docs/chapter-template',
                component: ComponentCreator('/docs/chapter-template', '7f6'),
                exact: true
              },
              {
                path: '/docs/community/contribution-guide',
                component: ComponentCreator('/docs/community/contribution-guide', 'f8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/content-validation-process',
                component: ComponentCreator('/docs/content-validation-process', 'be1'),
                exact: true
              },
              {
                path: '/docs/modules/module-1-ros2/chapter-1-introduction-to-ros2',
                component: ComponentCreator('/docs/modules/module-1-ros2/chapter-1-introduction-to-ros2', 'c6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module-1-ros2/chapter-2-ros2-communication-python-agents',
                component: ComponentCreator('/docs/modules/module-1-ros2/chapter-2-ros2-communication-python-agents', 'efa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module-1-ros2/chapter-3-urdf-humanoid-structure',
                component: ComponentCreator('/docs/modules/module-1-ros2/chapter-3-urdf-humanoid-structure', '965'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/module-1-ros2/summary',
                component: ComponentCreator('/docs/modules/module-1-ros2/summary', 'e71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/glossary',
                component: ComponentCreator('/docs/reference/glossary', 'efd'),
                exact: true
              },
              {
                path: '/docs/reference/ros2-concepts/nodes-topics-services',
                component: ComponentCreator('/docs/reference/ros2-concepts/nodes-topics-services', 'fe6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/ros2-concepts/rclpy-basics',
                component: ComponentCreator('/docs/reference/ros2-concepts/rclpy-basics', 'da4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/ros2-concepts/urdf-overview',
                component: ComponentCreator('/docs/reference/ros2-concepts/urdf-overview', '7fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/visual-assets-template',
                component: ComponentCreator('/docs/visual-assets-template', 'a0d'),
                exact: true
              },
              {
                path: '/docs/writing-guidelines',
                component: ComponentCreator('/docs/writing-guidelines', '853'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
