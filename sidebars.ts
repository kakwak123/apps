import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  docs: [
    { type: 'category', label: 'Apps', collapsed: false, items: ['singk', 'bucket', 'tile-designer'] },
    'privacy',
    'support',
  ],
}

export default sidebars
