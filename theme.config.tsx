import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>IT2</span>,
  project: {
    link: 'https://github.com/thorcc/IT2-nettbok',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'IT2 på Sandvika 2023/2024',
  },
  feedback: {
    content: null
  },
  editLink: {
    text: null
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - IT2'
    }
  },
  search: {
    placeholder: "Søk"
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  }
}


export default config
