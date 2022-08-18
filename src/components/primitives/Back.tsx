import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";

/**
 * @typedef Props
 * @prop {Function} [callback] - click callback
 */
export type Props = {
  callback?: Function,
}

const Link: React.FC<Props> = ( props: Props ) => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => { 
    props.callback && props.callback();
    navigate( -1 ); 
  }, [navigate] );

  return <Button
    callback={ handleClick }
    pic='back'
  />
};

export default Link;