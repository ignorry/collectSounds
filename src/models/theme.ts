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
  codeWidth: number,
  colors: {
    main: string,
    bg?: string,
    bgSecondary?: string,
    font?: string,
    darkBg?: string,
    activeBg?: string,
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
  miniThumbnail: {
    width: number,
    height: number,
    scale: number,
    opacity: number
  },
  error: {
    backgroundColor: string,
    width: number,
  },
  media: {
    small: string,
  },
  player: {
    iconSize: number,
    thumbWidth: number,
    thumbHeight: number,
    gap: number,
    sideGap: number,
    infoGap: number,
    buttonsGap: number,
    buttonScale: number,
    desktopWidth: number,
  },
  qrfade: { //percents
    fadeColor: string,
    hiddenSize: number,
    fadeWidth: number,
    opacity: number,
  }
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
    animation: number,
  },
  order: {
    player: number,
    footer: number,
    header: number,
    modal: number,
  },
}