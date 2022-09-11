---
layout: home
features:
  - icon: ⚡️
    title: Vite, The DX that can't be beat
    details: here is boilerplate vitepress for peter-chaudhary...
  - icon: 🖖
    title: Power of Vue meets Markdown
    details: Lorem ipsum Lorem ipsum Lorem ipsum...
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
  - icon: 🇮🇳
    title: Simple and minimal, always
    details: Lorem ipsum...
hero:
  name: Peter-chaudhary
  text: 🇮🇳 boilerplate vitepress for peter-chaudhary..
  tagline: Just playing around vuepress v2 for peter chaudhary 💻 
  image:
    src: https://ey5me.csb.app/happy.svg
    alt: VitePress

  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/mahmoud-mohasseb

---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/66387837?v=4',
    name: 'Mahmoud Ahmed',
    title: 'vitepress developmer',
    links: [
      { icon: 'github', link: 'https://github.com/mahmoud-mohasseb' },
      // { icon: 'facebook', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: 'https://avatars.githubusercontent.com/u/66387837?v=4',
    name: 'Mahmoud Ahmed',
    title: 'vitepress developmer',
    links: [
      { icon: 'github', link: 'https://github.com/mahmoud-mohasseb' },
      // { icon: 'facebook', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: 'https://avatars.githubusercontent.com/u/66387837?v=4',
    name: 'Mahmoud Ahmed',
    title: 'vitepress developmer',
    links: [
      { icon: 'github', link: 'https://github.com/mahmoud-mohasseb' },
      // { icon: 'facebook', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>

  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
