import { Theme } from "../../models/theme";

export const baseTheme: Theme = {
  iconSize: 1.5,

  colors: {
    main: '#00fa9a',
  },

  gaps: {
    small: 0.5,
    big: 1
  },

  media: {
    small: '(max-width: 767px)',
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

  sizes: {
    list: { maxWidth: 800 },
    footer: { height: 60 },
    play: { minimizedHeight: 80 },
    modal: { maxWidth: 540 },
  },

  durations: {
    ms300: 300,
  },

  order: {
    footer: 50,
    modal: 100,
  },
}