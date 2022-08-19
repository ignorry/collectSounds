import React, { ReactNode, Suspense } from "react";
import { Page, LangProvider } from "./localization";

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
      { props.children }
    </LangProvider>
  </Suspense>
);

export default ScreenWrapper;