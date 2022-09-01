import { DefaultTheme } from "styled-components";
import { ThemeEnum } from "../../models/theme";
import { baseTheme } from "./baseTheme";

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,

  colors: {
    ...baseTheme.colors,
    main: '#00bb88',
    bg: '#ffffff',
    bgSecondary: '#d8d8d8',
    font: '#000000',
    darkBg: '#d9d9d9'
  },
}

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    bg: '#000000',
    bgSecondary: '#2a2a2a',
    font: '#ffffff',
    darkBg: '#121212'
  },
}

/**
 * get theme depending on isDark parameter
 * @param {boolean} isDark 
 * @returns {DefaultTheme}
 */
export const getTheme = ( isDark: boolean ): DefaultTheme => isDark ? darkTheme : lightTheme;