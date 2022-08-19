import React, { ReactNode, useState, useEffect } from "react";
import { IntlProvider } from "react-intl";

export type Lang = 'en' | 'ru';
export type Page = 
  'search' |
  'saved' |
  'queue' |
  'settings' |
  'video' |
  'playlist' |
  'channel' |
  'synchronization';

/**
 * import specific translation file
 * @param {Page} page 
 * @param {Lang} lang 
 */
export const loadMessages = ( page: Page, lang: Lang ) => import( `../translations/${page}/${lang}.json` );

/**
 * get user's language
 * @returns {Lang} lang code (eg 'en', 'ru')
 */
export const getLang = (): Lang => {
  const code = navigator.language.slice( 0, 2 );

  if ( code === 'ru' ) return code;

  return 'en';
}

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
 * wrap component with TranslationProvider
 * @param {Props} props
 */
export const LangProvider: React.FC<Props> = ( props: Props ) => {
  const locale = getLang();
  const [messages, setMessages] = useState( null );

  useEffect(() => {
    loadMessages( props.file, locale ).then( setMessages );
  }, [locale]);

  return messages ? (
    <IntlProvider locale={locale} messages={messages}>
      { props.children }
    </IntlProvider>
  ) : <> { props.skeleton } </>;
}