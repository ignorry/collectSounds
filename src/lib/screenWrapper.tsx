import React, { ReactNode, Suspense } from "react";
import styled from "styled-components";
import { Page, LangProvider } from "./localization";

const Container = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;

  scrollbar-width: 0;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${ ({ theme }) => theme.media.small } {
    height: ${ ({ theme }) => `calc(100% - ${ theme.gaps.big*2 + theme.iconSize }rem)` };
  }
`;

/**
 * @typedef Props
 * @prop {string} file - translation file
 * @prop {ReactNode} children
 */
export type Props = {
  file: Page;
  children?: ReactNode;
  skeleton?: ReactNode;
}

/**
 * wrap component with Suspense and TranslationProvider
 * @param {Props} props
 */
const ScreenWrapper: React.FC<Props> = ( props: Props ) => (
  <Suspense fallback={ props.skeleton }>
    <LangProvider file={ props.file } skeleton={ props.skeleton }>
      <Container>
        { props.children }
      </Container>
    </LangProvider>
  </Suspense>
);

export default ScreenWrapper;