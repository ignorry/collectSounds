import { DefaultTheme } from "styled-components";
import { ThemeEnum } from "../../models/theme";
import { baseTheme } from "./baseTheme";

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,

  colors: {
    ...baseTheme.colors,
    bg: '#1f1f1f',
    bgSecondary: '#252525',
    font: '#000000',
  },
}

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    bg: '#ffffff',
    bgSecondary: '#f1f1f1',
    font: '#ffffff',
  },
}

/**
 * get theme depending on isDark parameter
 * @param {boolean} isDark 
 * @returns {DefaultTheme}
 */
export const getTheme = ( isDark: boolean ): DefaultTheme => isDark ? darkTheme : lightTheme;