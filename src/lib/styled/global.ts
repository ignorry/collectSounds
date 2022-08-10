import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: local( 'Roboto' ), url( ./fonts/Roboto.woff2 ) format( 'woff2' );
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    background: ${ ({ theme }) => theme.colors.bg };
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto';
    font-size: ${ ({ theme }) => `${theme.font.primary.size}rem` };
    color: ${ ({ theme }) => theme.colors.font };
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
`