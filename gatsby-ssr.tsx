/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

import { GatsbySSR, RenderBodyArgs } from 'gatsby'
import { createElement } from 'react'
import Layout from 'layouts'
// import ThemeProvider from 'styles/ThemeProvider'

const applyDarkModeClass = `
(function() {
  try {
    const mode = localStorage.getItem('theme');
    if (mode === 'dark') {
			document.body.classList.add('dark');
		} else if(mode === null) {
      const systemMode = window.matchMedia('(prefers-color-scheme: dark)');
      if(systemMode.matches) {
        document.body.classList.add('dark');
      }
    }
  } catch (e) {}
})();
`

export const onRenderBody = ({ setPreBodyComponents, setHtmlAttributes }: RenderBodyArgs) => {
  const script = createElement('script', {
    key: 'darkmode',
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
  })
  setHtmlAttributes({ lang: `en` })
  setPreBodyComponents([script])
}

// export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => (
//   <ThemeProvider>{element}</ThemeProvider>
// )

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
