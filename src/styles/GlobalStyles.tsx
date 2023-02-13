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
    color: ${theme.palette.black};
    transition: background-color 0.3s, color 0.3s;
    background-color: ${theme.palette.white};
    a {
      color: ${theme.palette.black};
      text-decoration: none;
    }
  }

  p {
    color: ${theme.palette.grey70};
  }
`

const GlobalStyles = () => <Global styles={(theme) => style(theme)} />

export default GlobalStyles
