import behance from '../public/icons/behance.svg'
import buymeacoffee from '../public/icons/buymeacoffee.svg'
import dribbble from '../public/icons/dribbble.svg'
import figma from '../public/icons/figma.svg'
import github from '../public/icons/github.svg'
import gumroad from '../public/icons/gumroad.svg'
import instagram from '../public/icons/instagram.svg'
import kofi from '../public/icons/kofi.svg'
import linkedin from '../public/icons/linkedin.svg'
import medium from '../public/icons/medium.svg'
import patreon from '../public/icons/patreon.svg'
import producthunt from '../public/icons/producthunt.svg'
import readcv from '../public/icons/read-cv.svg'
import reddit from '../public/icons/reddit.svg'
import tiktok from '../public/icons/tiktok.svg'
import twitch from '../public/icons/twitch.svg'
import x from '../public/icons/x.svg'
import youtube from '../public/icons/youtube.svg'

type SocialMedia = (typeof websites)[number]

type Link = {
  title: string
  icon: any
  link: string
  text?: string
}

const websites = [
  'behance',
  'buymeacoffee',
  'dribbble',
  'figma',
  'github',
  'gumroad',
  'instagram',
  'kofi',
  'linkedin',
  'medium',
  'patreon',
  'producthunt',
  'readcv',
  'reddit',
  'tiktok',
  'twitch',
  'x',
  'youtube',
]

const LINKS: { [key in SocialMedia]: Link } = {
  behance: {
    title: 'Behance',
    icon: behance,
    link: 'https://www.behance.net/johndoe',
    text: '@johndoe',
  },
  buymeacoffee: {
    title: 'Buy me a coffee',
    icon: buymeacoffee,
    link: 'https://buymeacoffee.com/johndoe',
  },
  dribbble: {
    title: 'Dribbble',
    icon: dribbble,
    link: 'https://dribbble.com/johndoe',
    text: '@johndoe',
  },
  figma: {
    title: 'Figma',
    icon: figma,
    link: 'https://www.figma.com/@johndoe',
    text: '@johndoe',
  },
  github: {
    title: 'Github',
    icon: github,
    link: 'https://github.com/johndoe',
    text: '@johndoe',
  },
  gumroad: {
    title: 'Gumroad',
    icon: gumroad,
    link: 'https://johndoe.gumroad.com/',
  },
  instagram: {
    title: 'Instagram',
    icon: instagram,
    link: 'https://www.instagram.com/johndoe/',
    text: '@johndoe',
  },
  kofi: {
    title: 'Ko-fi',
    icon: kofi,
    link: 'https://ko-fi.com/johndoe',
    text: '@johndoe',
  },
  linkedin: {
    title: 'Linkedin',
    icon: linkedin,
    link: 'https://www.linkedin.com/in/johndoe/',
    text: '@johndoe',
  },
  medium: {
    title: 'Medium',
    icon: medium,
    link: 'https://medium.com/@johndoe',
    text: '@johndoe',
  },
  patreon: {
    title: 'Patreon',
    icon: patreon,
    link: 'https://www.patreon.com/johndoe',
    text: '@johndoe',
  },
  producthunt: {
    title: 'Product Hunt',
    icon: producthunt,
    link: 'https://www.producthunt.com/@johndoe',
    text: '@johndoe',
  },
  readcv: {
    title: 'Read CV',
    icon: readcv,
    link: 'https://read.cv/johndoe',
    text: '@johndoe',
  },
  reddit: {
    title: 'Reddit',
    icon: reddit,
    link: 'https://reddit.com/u/johndoe',
    text: '/u/johndoe',
  },
  tiktok: {
    title: 'Tiktok',
    icon: tiktok,
    link: 'https://www.tiktok.com/@johndoe',
    text: '@johndoe',
  },
  twitch: {
    title: 'Twitch',
    icon: twitch,
    link: 'https://www.twitch.tv/johndoe',
    text: '@johndoe',
  },
  x: {
    title: 'X',
    icon: x,
    link: 'https://twitter.com/johndoe',
    text: 'johndoe',
  },
  youtube: {
    title: 'Youtube',
    icon: youtube,
    link: 'https://www.youtube.com/@johndoe',
    text: '@johndoe',
  },
}

export default LINKS
