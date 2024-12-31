// custom typefaces
// import '@fontsource/montserrat/variable.css'
// import '@fontsource/merriweather'
// normalize CSS across browsers
// import './src/normalize.css'
// import './src/styles/reset.css'
import './src/styles/style.scss';
// Highlighting for code blocks
import 'prismjs/themes/prism-tomorrow.css';

import { GatsbyBrowser } from 'gatsby';
import Layout from 'layouts';
import ThemeProvider from 'styles/ThemeProvider';
import ReactDOM from 'react-dom/client';
import { ReactNode } from 'react';

export const replaceHydrateFunction = () => {
  return (element: ReactNode, container: ReactDOM.Container) => {
    const root = ReactDOM.createRoot(container);
    root.render(element);
  };
};

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
