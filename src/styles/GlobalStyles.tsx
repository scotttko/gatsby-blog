import { css, Global, Theme } from '@emotion/react'

const style = (theme: Theme) => css`
  * {
    box-sizing: border-box;
    appearance: none;
    padding: 0;
    margin: 0;
  }

  html {
    font-family: inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji,
      Segoe UI Symbol, Noto Color Emoji;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    font-size: 14px;
    color: ${theme.palette.mainTextColor};
    transition: background-color 0.3s, color 0.3s;
    background-color: ${theme.palette.bgColor};
    a {
      color: ${theme.palette.mainTextColor};
      text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      color: ${theme.palette.mainTextColor};
    }

    p,
    li,
    td {
      color: ${theme.palette.subTextColor};
    }

    td,
    th {
      border-bottom: 1px solid ${theme.palette.buttonBgHoverColor} !important;
    }

    hr {
      background-color: ${theme.palette.buttonBgHoverColor} !important;
    }

    blockquote {
      color: ${theme.palette.buttonBgHoverColor} !important;
    }
  }
`

const GlobalStyles = () => <Global styles={(theme) => style(theme)} />

export default GlobalStyles
