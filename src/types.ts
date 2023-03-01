import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface SiteMetadata {
  title: string
  author: Author
  siteUrl: string
  social: Social
  utterances: {
    repo: string
  }
}

export interface Author {
  name: string
  summary: string
}

export interface Social {
  twitter: string
  github: string
  email: string
}

export interface Image {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

export interface MarkdownRemark extends Node {
  id: string
  frontmatter: Frontmatter
  fields: Fields
  excerpt: string
  html: string
}

export interface Frontmatter {
  title: string
  description: string
  date: string
  thumbnail: Image
  categories: string
}

export interface Fields {
  slug: string
}

export type ThemeType = 'light' | 'dark'
