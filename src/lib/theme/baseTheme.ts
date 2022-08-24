import { Theme } from "../../models/theme";

export const baseTheme: Theme = {
  iconSize: 1.5,
  rangeSize: 0.2,
  spinnerSize: 1.5,
  contentWidth: 60,

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

  error: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: 30,
  },

  media: {
    small: '(max-width: 1400px)',
  },

  player: {
    iconSize: 2.5,
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
    ms300: 300,
  },

  order: {
    footer: 50,
    modal: 100,
  },
}