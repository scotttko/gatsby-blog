export const lightTheme = {
  palette: {
    bgColor: '#ffffff',
    subBgColor: '#F0F0F0',

    mainTextColor: '#000000',
    subTextColor: '#303033',

    buttonBgColor: '#F4F4F4',
    buttonBgHoverColor: '#E4E4E4',
  },
}

export const darkTheme = {
  palette: {
    bgColor: '#232326',
    subBgColor: '#222222',

    mainTextColor: '#ffffff',
    subTextColor: '#ACACAC',

    buttonBgColor: '#303033',
    buttonBgHoverColor: '#5D5D5D',
  },
}

export const defaultTheme = {
  palette: {
    bgColor: 'var(--color-bg)',
    subBgColor: 'var(--color-sub-bg)',

    mainTextColor: 'var(--color-main-text)',
    subTextColor: 'var(--color-sub-text)',

    buttonBgColor: 'var(--color-button-bg)',
    buttonBgHoverColor: 'var(--color-button-bg-hover)',
  },
}

export type ITheme = typeof defaultTheme

export const MOBILE_MAXWIDTH = `(max-width: 768px)`
export const MOBILE_MEDIA_QUERY = `screen and ${MOBILE_MAXWIDTH}`
