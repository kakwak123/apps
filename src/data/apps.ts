// Add a new app here and give it a page in docs/<slug>.md.

export type App = {
  slug: string
  name: string
  altName?: string
  line: string
  status: string
  colors: { bg: string; name: string; text: string }
}

export const APPS: App[] = [
  {
    slug: 'singk',
    name: 'SingK',
    altName: '가왕각',
    line: 'Sing a song and find out which of eight tiers your voice is at.',
    status: 'Getting ready for Android testing',
    colors: { bg: '#15120b', name: '#ffb547', text: '#efe8da' },
  },
  {
    slug: 'bucket',
    name: 'Fishing Bucket',
    line: 'When and where to go for squid, crab, prawn and yabby from the Australian shore.',
    status: 'In development',
    colors: { bg: '#0e4a56', name: '#a5efe2', text: '#e2f6f1' },
  },
  {
    slug: 'tile-designer',
    name: 'Tile Floor Designer',
    line: 'See new tiles in your own room, then find a tiler near you in Melbourne.',
    status: 'Early development',
    colors: { bg: '#d9d3c5', name: '#26221a', text: '#332e24' },
  },
]
