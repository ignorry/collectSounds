import { Theme } from "../../models/theme";

export const baseTheme: Theme = {
  iconSize: 1.5,
  rangeSize: 0.2,
  spinnerSize: 1.5,
  contentWidth: 60,
  codeWidth: 30,

  colors: {
    main: '#00fa9a',
  },

  decorative: {
    borderRadius: 4,
    padding: 3,
  },

  gaps: {
    smallest: 0.2,
    small: 0.5,
    big: 1
  },

  thumbnail: {
    width: 9,
    height: 5,
    infoColor: 'rgba(0,0,0,0.8)',
    infoWidth: 4,
  },

  miniThumbnail: {
    width: 4.5,
    height: 2.5,
    scale: 0.7,
    opacity: 0.5
  },

  error: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: 30,
  },

  media: {
    small: '(max-width: 1400px)',
  },

  player: {
    iconSize: 2.5,
    thumbWidth: 6.75,
    thumbHeight: 3.75,
    gap: 2,
    sideGap: 2,
    infoGap: 2,
    buttonsGap: 2.5,
    buttonScale: 0.8,
    desktopWidth: 25,
  },

  qrfade: { //percents
    fadeColor: 'black',
    hiddenSize: 15,
    fadeWidth: 10,
    opacity: 0.7,
  },

  font: {
    primary: {
      size: 1,
      opacity: 1
    },
    secondary: {
      size: 0.8,
      opacity: 0.7
    }
  },

  durations: {
    animation: 200,
  },

  order: {
    player: 40,
    header: 30,
    footer: 50,
    modal: 100,
  },
}