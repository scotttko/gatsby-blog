import { css, Global, Theme } from '@emotion/react';

const style = (theme: Theme) => css`
  :root {
    --color-bg: #ffffff;
    --color-sub-bg: #ededf1;

    --color-main-text: #000000;
    --color-sub-text: #383a42;

    --color-button-bg: #ededf1;
    --color-button-bg-hover: #d8dadf;
  }

  [data-theme='dark'] {
    --color-bg: #25262c;
    --color-sub-bg: #383a42;

    --color-main-text: #ffffff;
    --color-sub-text: #b5b9c4;

    --color-button-bg: #383a42;
    --color-button-bg-hover: #3f434d;
  }

  * {
    box-sizing: border-box;
    appearance: none;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji,
      Segoe UI Symbol, Noto Color Emoji;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    font-size: 14px;
    color: ${theme.palette.mainTextColor};
    background-color: var(--color-bg);

    header {
      background-color: ${theme.palette.bgColor};
    }

    footer {
      background-color: ${theme.palette.buttonBgColor};

      a {
        color: ${theme.palette.subTextColor};
        text-decoration: none;
      }
    }

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

  ::-webkit-scrollbar {
    display: none;
  }
`;

const GlobalStyles = () => <Global styles={(theme) => style(theme)} />;

export default GlobalStyles;
