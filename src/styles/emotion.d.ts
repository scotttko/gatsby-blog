import '@emotion/react'
import { ITheme } from './theme'

declare module '@emotion/react' {
  export interface Theme extends ITheme {
    palette: {
      bgColor: string
      subBgColor: string
      mainTextColor: string
      subTextColor: string
      buttonBgColor: string
      buttonBgHoverColor: string
    }
  }
}
