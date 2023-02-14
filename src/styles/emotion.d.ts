import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
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
