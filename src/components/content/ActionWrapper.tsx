import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Video as VideoType } from "../../models/content";
import { getDurationFromMs } from "../../lib/getDuration";

import Label from "../primitives/Label";

const Wrapper = styled.div`
  position: relative;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  color: ${ ({ theme }) => theme.colors.main };
  opacity: 0;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  color: ${ ({ theme }) => theme.colors.main };
  opacity: 0;
`;

const Component = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
`;

/**
 * @typedef Action
 * @prop {string} label
 * @prop {Function} callback
 */
export type Action = {
  label: string,
  callback: Function,
}

/**
 * @typedef Props
 * @prop {any} [children] - to be wrapped
 * @prop {Action} [left]
 * @prop {Action} [right]
 * @prop {Function} [callback] - click callback
 */
export type Props = {
  children?: any,
  left?: Action,
  right?: Action,
  callback?: Function,
};

const ActionWrapper: React.FC<Props> = ( props: Props ) => {
  const left: React.MutableRefObject<undefined | HTMLDivElement> = useRef();
  const right: React.MutableRefObject<undefined | HTMLDivElement> = useRef();
  const component: React.MutableRefObject<undefined | HTMLDivElement> = useRef();

  useEffect(() => {
    const reset = () => {
      component.current.setAttribute( 'x', '0' );
      component.current.setAttribute( 'y', '0' );
      component.current.style.left = '0';
      if ( right && right.current )
        right.current.style.opacity = '0';
      if ( left && left.current )
        left.current.style.opacity = '0';
    }

    const onStart = ( clientX: number, clientY: number ) => {
      component.current.setAttribute( 'x', clientX.toString() );
      component.current.setAttribute( 'y', clientY.toString() );
    }

    const onMove = ( clientX: number, clientY: number ) => {
      const start = +component.current.getAttribute( 'x' );
      const startY = +component.current.getAttribute( 'y' );

      if ( Math.abs( clientY-startY ) > Math.abs( clientX-start ) ) return;

      if ( ! start ) return;
      if ( clientX - start > 100 && props.left )
        component.current.style.left = `${ 100+Math.log( clientX - start - 100 )*5 }px`;
      else if ( clientX - start < -100 && props.right )
        component.current.style.left = `${ -Math.log( -( clientX - start ) - 100 )*5-100 }px`;
      else if ( ( clientX - start > 0 && props.left ) || ( clientX - start < 0 && props.right ) )
        component.current.style.left = `${ clientX - start }px` ;

      if ( clientX - start > 60 ) {
        if ( right && right.current )
          right.current.style.opacity = '0';
        if ( left && left.current )
          left.current.style.opacity = `${ ( ( clientX - start ) - 60 )/100 }`;
      } else if ( clientX - start < -60 ) {
        if ( left && left.current )
          left.current.style.opacity = '0';
        if ( right && right.current )
          right.current.style.opacity = `${ -( ( clientX - start ) +60 )/100 }`;
      } else {
        if ( right && right.current )
          right.current.style.opacity = '0';
        if ( left && left.current )
          left.current.style.opacity = '0';
      }
    }

    const onEnd = ( clientX: number, clientY: number ) => {
      const start = +component.current.getAttribute( 'x' );
      const startY = +component.current.getAttribute( 'y' );

      if ( Math.abs( clientY-startY ) < 2 && Math.abs( clientX-start ) < 2 ) props.callback();
      else if ( Math.abs( clientY-startY ) < Math.abs( clientX-start ) && clientX-start >= 100 ) props.left.callback();
      else if ( Math.abs( clientY-startY ) < Math.abs( clientX-start ) && clientX-start <= -100 ) props.right.callback();
      
      reset();
    }

    if ( component && component.current ) {
      component.current.addEventListener( 'mousedown', (e) => onStart( e.clientX, e.clientY ) );
      component.current.addEventListener( 'touchstart', (e) => onStart( e.touches[0].clientX, e.touches[0].clientY ) );
      component.current.addEventListener( 'mousemove', (e) => onMove( e.clientX, e.clientY ) );
      component.current.addEventListener( 'touchmove', (e) => onMove( e.touches[0].clientX, e.touches[0].clientY ) );
      component.current.addEventListener( 'mouseup', (e) => onEnd( e.clientX, e.clientY ) );
      component.current.addEventListener( 'touchend', (e) => onEnd( e.changedTouches[0].clientX, e.changedTouches[0].clientY ) );
      component.current.addEventListener( 'mouseleave', (e) => reset() );
      component.current.addEventListener( 'touchleave', (e) => reset() );
    }
});


  return (
    <Wrapper>
      { props.left ? <Left ref={ left }><Label text={ props.left.label }/></Left> : null }
      <Component ref={ component }>{ props.children }</Component>
      { props.right ? <Right ref={ right }><Label text={ props.right.label }/></Right> : null }
    </Wrapper>
  )
};

export default ActionWrapper;