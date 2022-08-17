import React from "react";
import styled from "styled-components";
import { Content } from "../../models/content";

import Label from "../primitives/Label";
import Video from "./Video";
import Playlist from "./Playlist";
import Channel from "./Channel";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem` };
`;

type Item = {
  content: Content;
  callback: Function;
}

/**
 * @typedef Props
 * @prop {Array<Item>} items - items to be displayed
 * @prop {string} emptyMessage - display if itmes empty
 */
export type Props = {
  items: Array<Item>;
  emptyMessage: string;
}

const List: React.FC<Props> = ( props: Props ) => {
  const content: Array<JSX.Element> = props.items.map( item => {
    if ( item.content.type === 'video' )
      return <Video video={ item.content } callback={ item.callback }/>
    if ( item.content.type === 'playlist' )
      return <Playlist playlist={ item.content } callback={ item.callback }/>
    return <Channel channel={ item.content } callback={ item.callback }/>
  });
  
  return (
    <Div>
      {content.length !== 0 ?
        content :
        <Message>
          <Label text={ props.emptyMessage }/>
        </Message>
      }
    </Div>
  );
}

export default List;