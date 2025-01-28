/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

import { GatsbySSR, RenderBodyArgs } from 'gatsby';
import { createElement } from 'react';
import Layout from 'layouts';
import ThemeProvider from 'styles/ThemeProvider';

const applyDarkModeClass = `
(function() {
  try {
    const mode = localStorage.getItem('theme');

    if (mode) {
      document.documentElement.dataset.theme = mode;
      return;
    }
      
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    if(systemTheme.matches) {
      document.documentElement.dataset.theme = 'dark';
    } else {
      document.documentElement.dataset.theme = 'light';
    }

  } catch (e) {}
})();
`;

export const onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setHtmlAttributes,
}: RenderBodyArgs) => {
  const script = createElement('script', {
    key: 'darkmode',
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
  });
  setHtmlAttributes({ lang: `en` });
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Inter/Inter.var.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ]);

  setPreBodyComponents([script]);
};

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
