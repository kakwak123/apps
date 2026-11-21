import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  docs: [
    { type: 'category', label: 'Apps', collapsed: false, items: ['singk', 'bucket', 'tile-designer'] },
    { type: 'category', label: 'Legal', collapsed: false, link: { type: 'doc', id: 'privacy' }, items: ['singk-privacy', 'singk-terms'] },
    'support',
  ],
}

export default sidebars
