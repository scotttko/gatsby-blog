import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'
import { ThemeType } from 'types'

const src = 'https://utteranc.es/client.js'
const branch = 'main'
export const DARK_THEME = 'github-dark'
export const LIGHT_THEME = 'github-light'

interface UtterancesProps {
  repo: string
}

export const UtterancesWrapper = styled.div`
  padding: 32px 0;
`

const Utterances = ({ repo }: UtterancesProps) => {
  const rootElm = useRef<HTMLDivElement>(null)
  const isUtterancesLoaded = useRef(false)

  useEffect(() => {
    if (!rootElm.current || isUtterancesLoaded.current) return

    const theme = window.localStorage.getItem('theme') as ThemeType | null

    const utterances = document.createElement('script')
    const utterancesConfig: { [key: string]: unknown } = {
      src,
      repo,
      branch,
      theme: theme === 'dark' ? DARK_THEME : LIGHT_THEME,
      label: 'comment',
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    }

    Object.keys(utterancesConfig).forEach((configKey) => {
      utterances.setAttribute(configKey, utterancesConfig[configKey] as string)
    })
    rootElm.current.appendChild(utterances)
    isUtterancesLoaded.current = true
  }, [repo])

  return <UtterancesWrapper ref={rootElm} />
}

export default Utterances
