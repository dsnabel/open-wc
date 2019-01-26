// .vuepress/config.js

const sidebar = [
  ['/', 'Home'],
  ['/guide/', 'Introduction'],
  {
    title: 'IDE',
    collapsable: true,
    children: [['/ide/', 'Getting started']],
  },
  {
    title: 'Developing',
    collapsable: true,
    children: [
      ['/developing/', 'Getting started'],
      '/developing/dev-server',
      ['/developing/generator', 'Generators'],
    ],
  },
  {
    title: 'Linting',
    collapsable: true,
    children: [
      ['/linting/', 'Getting started'],
      '/linting/linting-eslint',
      '/linting/linting-prettier',
    ],
  },
  {
    title: 'Testing',
    collapsable: true,
    children: [
      ['/testing/', 'Getting started'],
      '/testing/testing-helpers',
      '/testing/testing-chai-dom-equals',
      '/testing/testing-karma',
      '/testing/testing-karma-bs',
      '/testing/testing-wallaby',
    ],
  },
  {
    title: 'Building',
    collapsable: true,
    children: [
      ['/building/', 'Getting started'],
      '/building/building-webpack',
      '/building/polyfills-loader',
    ],
  },
  {
    title: 'Demoing',
    collapsable: true,
    children: [['/demoing/', 'Getting started']],
  },
  {
    title: 'Publishing',
    collapsable: true,
    children: [['/publishing/', 'Getting started']],
  },
  {
    title: 'Automating',
    collapsable: true,
    children: [['/automating/', 'Getting started']],
  },
];
module.exports = {
  title: 'open-wc',
  description: 'Open Web Component Recommendations',
  themeConfig: {
    logo: '/logo.png',
    displayAllHeaders: false,
    sidebarDepth: 2,
    sidebar: {
      '/guide/': sidebar,
      '/ide/': sidebar,
      '/developing/': sidebar,
      '/linting/': sidebar,
      '/testing/': sidebar,
      '/building/': sidebar,
      '/demoing/': sidebar,
      '/publishing/': sidebar,
      '/automating/': sidebar,
      '/setup/': [['/guide/', '⇐ back to Guide'], '', 'generator'],
      '/faq/': ['', 'rerender'],
      '/about/': [['/about/', 'About'], ['/about/contact', 'Contact']],
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'About', link: '/about/' },
    ],
    repo: 'open-wc/open-wc',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit Page',
    lastUpdated: 'Last Updated',
  },
  dest: '_site',
  plugins: ['@vuepress/google-analytics'],
  ga: 'UA-131782693-1',
};
