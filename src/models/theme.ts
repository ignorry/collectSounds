export enum ThemeEnum  {
  light = 'light',
  dark = 'dark'
}

// all sizes in rem
export type Theme = {
  iconSize: number,
  rangeSize: number,
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
    small: number,
    big: number,
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
  sizes: {
    list: { maxWidth: number },
    footer: { height: number },
    play: { minimizedHeight: number },
    modal: { maxWidth: number },
  },
  durations: {
    ms300: number,
  },
  order: {
    footer: number,
    modal: number,
  },
}