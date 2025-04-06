import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface SiteMetadata {
  title: string;
  author: Author;
  siteUrl: string;
  ogImage: string;
  social: Social;
  utterances: {
    repo: string;
  };
}

export interface Author {
  name: string;
  summary: string;
}

export interface Social {
  github: string;
  email: string;
}

export interface Image {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}

export interface MarkdownRemark<T> extends Node {
  id: string;
  frontmatter: T;
  fields: Fields;
  excerpt: string;
  html: string;
  tableOfContents: string;
}

export interface Frontmatter {
  title: string;
  description: string;
  date: string;
  thumbnail: Image;
  categories: string;
  status?: 'LIVE' | 'WIP';
  period?: string;
}

export interface ProjectFrontmatter {
  title: string;
  description: string;
  period: string;
  thumbnail: Image;
  category: string;
  status: 'LIVE' | 'WIP';
  tech: string;
}

export interface Fields {
  slug: string;
}

export type ThemeType = 'light' | 'dark';
