export enum ThemeEnum  {
  light = 'light',
  dark = 'dark'
}

// all sizes in rem
export type Theme = {
  iconSize: number,
  rangeSize: number,
  spinnerSize: number,
  contentWidth: number,
  colors: {
    main: string,
    bg?: string,
    bgSecondary?: string,
    font?: string,
    darkBg?: string,
  },
  decorative: { // in px
    borderRadius: number;
    padding: number;
  },
  gaps: {
    smallest: number,
    small: number,
    big: number,
  },
  thumbnail: {
    width: number,
    height: number,
    infoColor: string,
    infoWidth: 4,
  },
  error: {
    backgroundColor: string,
    width: number,
  },
  media: {
    small: string,
  },
  font: {
    primary: {
      size: number,
      opacity: number,
    },
    secondary: {
      size: number,
      opacity: number,
    },
  },
  durations: {
    ms300: number,
  },
  order: {
    footer: number,
    modal: number,
  },
}