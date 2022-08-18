import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";

/**
 * @typedef Props
 * @prop {string} link - link
 * @prop {Function} [callback] - click callback
 * @prop {boolean} [secondary] - use seconday label
 * @prop {string} [pic] - name of icon in sprite
 * @prop {string} [text] - text to be displayed in button
 */
export type Props = {
  link: string,
  callback?: Function,
  secondary?: boolean,
  pic?: string,
  text?: string,
}

const Link: React.FC<Props> = ( props: Props ) => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => { 
    props.callback && props.callback();
    navigate( props.link ); 
  }, [navigate] );

  return <Button
    callback={ handleClick }
    secondary={ props.secondary }
    pic={ props.pic }
    text={ props.text }
  />
};

export default Link;